import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { MountainService } from './services/mountain.service';
import { PdfService } from './services/pdf.service';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let mountainService: MountainService;

  beforeEach(async () => {
    // Mock localStorage
    const store: { [key: string]: string } = {};
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key: string) => store[key] || null);
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation((key: string, value: string) => { store[key] = value; });
    
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [MountainService, PdfService]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    mountainService = TestBed.inject(MountainService);
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display mountains in the table', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(28);
  });

  it('should return correct difficulty class', () => {
    expect(component['getDifficultyClass']('łatwa')).toBe('difficulty-easy');
    expect(component['getDifficultyClass']('średnia')).toBe('difficulty-medium');
    expect(component['getDifficultyClass']('trudna')).toBe('difficulty-hard');
  });

  it('should calculate progress percentage', () => {
    expect(component['getProgressPercentage']()).toBe(0);
  });

  it('should open and close mountain details', () => {
    const mountain = mountainService.mountains()[0];
    component['openMountainDetails'](mountain);
    expect(component['selectedMountain']()).toBeTruthy();
    
    component['closeMountainDetails']();
    expect(component['selectedMountain']()).toBeNull();
  });
});
