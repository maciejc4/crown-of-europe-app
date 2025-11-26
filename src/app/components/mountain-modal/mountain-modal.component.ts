import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mountain } from '../../models/mountain.model';
import { WeatherService, WeatherData } from '../../services/weather.service';

@Component({
  selector: 'app-mountain-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mountain-modal.component.html',
  styleUrl: './mountain-modal.component.scss'
})
export class MountainModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() mountain!: Mountain;
  @Output() close = new EventEmitter<void>();
  @Output() toggleClimbed = new EventEmitter<number>();
  
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  
  private weatherService = inject(WeatherService);
  private escapeListener?: (event: KeyboardEvent) => void;

  weather = signal<WeatherData | null>(null);
  weatherLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.escapeListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.onClose();
      }
    };
    document.addEventListener('keydown', this.escapeListener);
    document.body.style.overflow = 'hidden';
    
    this.loadWeather();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    if (this.escapeListener) {
      document.removeEventListener('keydown', this.escapeListener);
    }
    document.body.style.overflow = '';
  }

  private async loadWeather(): Promise<void> {
    this.weatherLoading.set(true);
    const { latitude, longitude } = this.mountain.details;
    const data = await this.weatherService.getWeather(latitude, longitude);
    this.weather.set(data);
    this.weatherLoading.set(false);
  }

  private initMap(): void {
    if (this.mapContainer && this.mountain) {
      const { latitude, longitude } = this.mountain.details;
      const delta = 0.015;
      const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - delta}%2C${latitude - delta}%2C${longitude + delta}%2C${latitude + delta}&layer=mapnik&marker=${latitude}%2C${longitude}`;
      
      const iframe = document.createElement('iframe');
      iframe.src = mapUrl;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '12px';
      iframe.title = `Map of ${this.mountain.name}`;
      iframe.loading = 'lazy';
      
      this.mapContainer.nativeElement.appendChild(iframe);
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.onClose();
    }
  }

  onToggleClimbed(): void {
    this.toggleClimbed.emit(this.mountain.id);
  }

  getTrailDifficultyClass(difficulty: string): string {
    switch (difficulty) {
      case 'easy': return 'trail-easy';
      case 'medium': return 'trail-medium';
      case 'hard': return 'trail-hard';
      default: return '';
    }
  }

  openInMapyCz(): void {
    const { latitude, longitude } = this.mountain.details;
    const url = `https://mapy.cz/turisticka?x=${longitude}&y=${latitude}&z=15`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  openInOSM(): void {
    const { latitude, longitude } = this.mountain.details;
    const url = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
