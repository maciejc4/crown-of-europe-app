import { TestBed } from '@angular/core/testing';
import { MountainService } from './mountain.service';
import { KORONA_GOR_POLSKICH } from '../data/mountains.data';

describe('MountainService', () => {
  let service: MountainService;

  beforeEach(() => {
    // Mock localStorage
    const store: { [key: string]: string } = {};
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key: string) => store[key] || null);
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation((key: string, value: string) => { store[key] = value; });

    TestBed.configureTestingModule({});
    service = TestBed.inject(MountainService);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load all mountains', () => {
    const mountains = service.mountains();
    expect(mountains.length).toBe(KORONA_GOR_POLSKICH.length);
  });

  it('should have no climbed mountains initially', () => {
    const climbed = service.climbedMountains();
    expect(climbed.length).toBe(0);
  });

  it('should sort mountains by height descending by default', () => {
    const mountains = service.mountains();
    for (let i = 0; i < mountains.length - 1; i++) {
      expect(mountains[i].height).toBeGreaterThanOrEqual(mountains[i + 1].height);
    }
  });

  it('should change sort column', () => {
    service.sort('name');
    expect(service.sortColumn()).toBe('name');
    expect(service.sortDirection()).toBe('asc');
  });

  it('should toggle sort direction', () => {
    expect(service.sortDirection()).toBe('desc');
    service.sort('height');
    expect(service.sortDirection()).toBe('asc');
  });

  it('should export data correctly', () => {
    const exported = service.exportData();
    expect(exported.version).toBe('1.0.0');
    expect(exported.climbedIds).toEqual([]);
  });

  it('should find mountain by id', () => {
    const mountain = service.getMountainById(1);
    expect(mountain).toBeTruthy();
    expect(mountain?.name).toBe('Rysy');
  });

  it('should return undefined for non-existent id', () => {
    const mountain = service.getMountainById(999);
    expect(mountain).toBeUndefined();
  });
});
