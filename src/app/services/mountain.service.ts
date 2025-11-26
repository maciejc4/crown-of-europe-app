import { Injectable, signal, computed } from '@angular/core';
import { Mountain, SortColumn, SortDirection, ClimbedData } from '../models/mountain.model';
import { CROWN_OF_EUROPE } from '../data/mountains.data';

const STORAGE_KEY = 'crown-of-europe-climbed';
const APP_VERSION = '1.0.0';

@Injectable({
  providedIn: 'root'
})
export class MountainService {
  private mountainsSignal = signal<Mountain[]>(this.loadMountains());
  private sortColumnSignal = signal<SortColumn>('height');
  private sortDirectionSignal = signal<SortDirection>('desc');

  readonly mountains = computed(() => {
    const mountains = [...this.mountainsSignal()];
    const column = this.sortColumnSignal();
    const direction = this.sortDirectionSignal();

    return mountains.sort((a, b) => {
      let comparison = 0;

      switch (column) {
        case 'name':
          comparison = a.name.localeCompare(b.name, 'en');
          break;
        case 'height':
          comparison = a.height - b.height;
          break;
        case 'region':
          comparison = a.region.localeCompare(b.region, 'en');
          break;
        case 'country':
          comparison = a.country.localeCompare(b.country, 'en');
          break;
        case 'difficulty':
          const difficultyOrder: Record<string, number> = { 'easy': 1, 'medium': 2, 'hard': 3 };
          comparison = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
          break;
        case 'climbed':
          comparison = (a.climbed === b.climbed) ? 0 : a.climbed ? -1 : 1;
          break;
      }

      return direction === 'asc' ? comparison : -comparison;
    });
  });

  readonly climbedMountains = computed(() => 
    this.mountainsSignal().filter(m => m.climbed)
  );

  readonly notClimbedMountains = computed(() => 
    this.mountainsSignal().filter(m => !m.climbed)
  );

  readonly sortColumn = this.sortColumnSignal.asReadonly();
  readonly sortDirection = this.sortDirectionSignal.asReadonly();

  private loadMountains(): Mountain[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const climbedIds: number[] = JSON.parse(saved);
        return CROWN_OF_EUROPE.map(mountain => ({
          ...mountain,
          climbed: climbedIds.includes(mountain.id)
        }));
      }
    } catch (error) {
      console.error('Error loading mountains from localStorage:', error);
    }
    return [...CROWN_OF_EUROPE];
  }

  private saveMountains(): void {
    try {
      const climbedIds = this.mountainsSignal()
        .filter(m => m.climbed)
        .map(m => m.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(climbedIds));
    } catch (error) {
      console.error('Error saving mountains to localStorage:', error);
    }
  }

  toggleClimbed(mountainId: number): void {
    this.mountainsSignal.update(mountains =>
      mountains.map(m =>
        m.id === mountainId ? { ...m, climbed: !m.climbed } : m
      )
    );
    this.saveMountains();
  }

  sort(column: SortColumn): void {
    if (this.sortColumnSignal() === column) {
      this.sortDirectionSignal.update(dir => dir === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumnSignal.set(column);
      this.sortDirectionSignal.set('asc');
    }
  }

  getMountainById(id: number): Mountain | undefined {
    return this.mountainsSignal().find(m => m.id === id);
  }

  exportData(): ClimbedData {
    return {
      version: APP_VERSION,
      exportDate: new Date().toISOString(),
      climbedIds: this.mountainsSignal()
        .filter(m => m.climbed)
        .map(m => m.id)
    };
  }

  importData(data: ClimbedData): { success: boolean; message: string } {
    try {
      if (!data || !Array.isArray(data.climbedIds)) {
        return { success: false, message: 'Invalid file format' };
      }

      const validIds = CROWN_OF_EUROPE.map(m => m.id);
      const importedIds = data.climbedIds.filter(id => validIds.includes(id));

      this.mountainsSignal.update(mountains =>
        mountains.map(m => ({
          ...m,
          climbed: importedIds.includes(m.id)
        }))
      );
      this.saveMountains();

      return { 
        success: true, 
        message: `Imported ${importedIds.length} climbed peaks` 
      };
    } catch (error) {
      console.error('Error importing data:', error);
      return { success: false, message: 'Error importing data' };
    }
  }
}
