import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'korona-gor-theme';
  private platformId = inject(PLATFORM_ID);
  
  readonly theme = signal<Theme>(this.loadTheme());

  constructor() {
    // Immediately apply theme
    this.applyTheme(this.theme());
    
    // Watch for changes
    effect(() => {
      const currentTheme = this.theme();
      this.applyTheme(currentTheme);
      this.saveTheme(currentTheme);
    });
  }

  toggleTheme(): void {
    this.theme.update(current => current === 'light' ? 'dark' : 'light');
  }

  private applyTheme(theme: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
    }
  }

  private loadTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }
    
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      // Check system preference
      if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // localStorage not available
    }
    return 'light';
  }

  private saveTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch {
      // localStorage not available
    }
  }
}
