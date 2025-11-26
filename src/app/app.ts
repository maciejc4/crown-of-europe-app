import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MountainService } from './services/mountain.service';
import { PdfService } from './services/pdf.service';
import { ThemeService } from './services/theme.service';
import { MountainModalComponent } from './components/mountain-modal/mountain-modal.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { Mountain, SortColumn, ClimbedData } from './models/mountain.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MountainModalComponent, StatisticsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly mountainService = inject(MountainService);
  protected readonly pdfService = inject(PdfService);
  protected readonly themeService = inject(ThemeService);

  protected readonly sortColumn = this.mountainService.sortColumn;
  protected readonly sortDirection = this.mountainService.sortDirection;
  protected readonly climbedMountains = this.mountainService.climbedMountains;
  protected readonly theme = this.themeService.theme;
  
  protected searchQuery = signal<string>('');
  protected selectedMountain = signal<Mountain | null>(null);
  protected showStatistics = signal<boolean>(false);
  protected notification = signal<{ message: string; type: 'success' | 'error' } | null>(null);

  protected readonly filteredMountains = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const allMountains = this.mountainService.mountains();
    
    if (!query) {
      return allMountains;
    }
    
    return allMountains.filter(m => 
      m.name.toLowerCase().includes(query) ||
      m.region.toLowerCase().includes(query) ||
      m.country.toLowerCase().includes(query) ||
      m.geoZone.toLowerCase().includes(query) ||
      m.difficulty.toLowerCase().includes(query) ||
      m.height.toString().includes(query)
    );
  });

  protected readonly totalMountains = computed(() => this.mountainService.mountains().length);

  protected onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }

  protected clearSearch(): void {
    this.searchQuery.set('');
  }

  protected toggleClimbed(id: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.mountainService.toggleClimbed(id);
  }

  protected sort(column: SortColumn): void {
    this.mountainService.sort(column);
  }

  protected async generatePdf(): Promise<void> {
    await this.pdfService.generatePdf();
  }

  protected getSortIcon(column: SortColumn): string {
    if (this.sortColumn() !== column) {
      return 'unfold_more';
    }
    return this.sortDirection() === 'asc' ? 'expand_less' : 'expand_more';
  }

  protected getDifficultyClass(difficulty: string): string {
    switch (difficulty) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
      default: return '';
    }
  }

  protected getProgressPercentage(): number {
    const total = this.totalMountains();
    if (total === 0) return 0;
    return Math.round((this.climbedMountains().length / total) * 100);
  }

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  protected openStatistics(): void {
    this.showStatistics.set(true);
  }

  protected closeStatistics(): void {
    this.showStatistics.set(false);
  }

  protected openMountainDetails(mountain: Mountain): void {
    this.selectedMountain.set(mountain);
  }

  protected closeMountainDetails(): void {
    this.selectedMountain.set(null);
  }

  protected onModalToggleClimbed(id: number): void {
    this.mountainService.toggleClimbed(id);
    const updated = this.mountainService.getMountainById(id);
    if (updated) {
      this.selectedMountain.set(updated);
    }
  }

  protected exportData(): void {
    const data = this.mountainService.exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `crown-of-europe-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showNotification('Data exported successfully', 'success');
  }

  protected importData(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string) as ClimbedData;
        const result = this.mountainService.importData(data);
        this.showNotification(result.message, result.success ? 'success' : 'error');
      } catch {
        this.showNotification('Error reading file', 'error');
      }
      input.value = '';
    };
    reader.readAsText(file);
  }

  private showNotification(message: string, type: 'success' | 'error'): void {
    this.notification.set({ message, type });
    setTimeout(() => {
      this.notification.set(null);
    }, 3000);
  }
}
