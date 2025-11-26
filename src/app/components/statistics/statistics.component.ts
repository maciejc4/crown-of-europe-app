import { Component, inject, computed, output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountainService } from '../../services/mountain.service';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit, OnDestroy {
  private mountainService = inject(MountainService);
  private escapeListener?: (event: KeyboardEvent) => void;
  
  close = output<void>();

  readonly climbedMountains = this.mountainService.climbedMountains;
  readonly allMountains = this.mountainService.mountains;

  readonly totalHeight = computed(() => {
    return this.climbedMountains().reduce((sum, m) => sum + m.height, 0);
  });

  readonly totalHeightAll = computed(() => {
    return this.allMountains().reduce((sum, m) => sum + m.height, 0);
  });

  readonly averageHeight = computed(() => {
    const climbed = this.climbedMountains();
    if (climbed.length === 0) return 0;
    return Math.round(this.totalHeight() / climbed.length);
  });

  readonly highestClimbed = computed(() => {
    const climbed = this.climbedMountains();
    if (climbed.length === 0) return null;
    return climbed.reduce((max, m) => m.height > max.height ? m : max);
  });

  readonly lowestClimbed = computed(() => {
    const climbed = this.climbedMountains();
    if (climbed.length === 0) return null;
    return climbed.reduce((min, m) => m.height < min.height ? m : min);
  });

  readonly heightRange = computed(() => {
    const highest = this.highestClimbed();
    const lowest = this.lowestClimbed();
    if (!highest || !lowest) return 0;
    return highest.height - lowest.height;
  });

  readonly difficultyStats = computed(() => {
    const climbed = this.climbedMountains();
    const all = this.allMountains();
    
    return {
      easy: {
        climbed: climbed.filter(m => m.difficulty === 'easy').length,
        total: all.filter(m => m.difficulty === 'easy').length
      },
      medium: {
        climbed: climbed.filter(m => m.difficulty === 'medium').length,
        total: all.filter(m => m.difficulty === 'medium').length
      },
      hard: {
        climbed: climbed.filter(m => m.difficulty === 'hard').length,
        total: all.filter(m => m.difficulty === 'hard').length
      }
    };
  });

  readonly countryStats = computed(() => {
    const climbed = this.climbedMountains();
    const all = this.allMountains();
    
    const countries = [...new Set(all.map(m => m.country))];
    
    return countries.map(country => ({
      name: country,
      climbed: climbed.filter(m => m.country === country).length,
      total: all.filter(m => m.country === country).length,
      percentage: Math.round((climbed.filter(m => m.country === country).length / all.filter(m => m.country === country).length) * 100) || 0
    })).sort((a, b) => b.percentage - a.percentage);
  });

  readonly completedCountries = computed(() => {
    return this.countryStats().filter(c => c.climbed === c.total && c.total > 0);
  });

  readonly nextToClimb = computed(() => {
    const notClimbed = this.allMountains().filter(m => !m.climbed);
    if (notClimbed.length === 0) return [];
    return notClimbed
      .sort((a, b) => {
        const diffOrder = { 'easy': 0, 'medium': 1, 'hard': 2 };
        const diffDiff = (diffOrder[a.difficulty as keyof typeof diffOrder] || 0) - (diffOrder[b.difficulty as keyof typeof diffOrder] || 0);
        if (diffDiff !== 0) return diffDiff;
        return a.height - b.height;
      })
      .slice(0, 3);
  });

  readonly estimatedTimeToComplete = computed(() => {
    const remaining = this.allMountains().filter(m => !m.climbed).length;
    const months = Math.ceil(remaining / 2);
    if (months < 12) {
      return `~${months} month${months === 1 ? '' : 's'}`;
    }
    const years = Math.round(months / 12 * 10) / 10;
    return `~${years} year${years === 1 ? '' : 's'}`;
  });

  readonly completionPercentage = computed(() => {
    const total = this.allMountains().length;
    if (total === 0) return 0;
    return Math.round((this.climbedMountains().length / total) * 100);
  });

  ngOnInit(): void {
    this.escapeListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.onClose();
      }
    };
    document.addEventListener('keydown', this.escapeListener);
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    if (this.escapeListener) {
      document.removeEventListener('keydown', this.escapeListener);
    }
    document.body.style.overflow = '';
  }

  onClose(): void {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.onClose();
    }
  }
}
