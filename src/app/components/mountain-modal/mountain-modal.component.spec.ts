import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MountainModalComponent } from './mountain-modal.component';
import { Mountain } from '../../models/mountain.model';

describe('MountainModalComponent', () => {
  let component: MountainModalComponent;
  let fixture: ComponentFixture<MountainModalComponent>;
  
  const mockMountain: Mountain = {
    id: 1,
    name: 'Rysy',
    height: 2499,
    region: 'Tatry',
    difficulty: 'trudna',
    climbed: false,
    details: {
      description: 'Test description',
      imageUrl: 'https://example.com/image.jpg',
      imageAttribution: 'Test Attribution',
      latitude: 49.1795,
      longitude: 20.0885,
      trails: [
        { name: 'Test Trail', distance: '5 km', duration: '3 h', difficulty: 'trudny' }
      ]
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MountainModalComponent);
    component = fixture.componentInstance;
    component.mountain = mockMountain;
    fixture.detectChanges();
  });

  afterEach(() => {
    document.body.style.overflow = '';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display mountain name', () => {
    const header = fixture.nativeElement.querySelector('h2');
    expect(header.textContent).toContain('Rysy');
  });

  it('should display mountain height', () => {
    const heightBadge = fixture.nativeElement.querySelector('.height-badge');
    expect(heightBadge.textContent).toContain('2499');
  });

  it('should emit close event when close button is clicked', () => {
    const closeSpy = vi.spyOn(component.close, 'emit');
    const closeBtn = fixture.nativeElement.querySelector('.close-btn');
    
    closeBtn.click();
    
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should emit close event when overlay is clicked', () => {
    const closeSpy = vi.spyOn(component.close, 'emit');
    const overlay = fixture.nativeElement.querySelector('.modal-overlay');
    
    overlay.click();
    
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should not close when modal content is clicked', () => {
    const closeSpy = vi.spyOn(component.close, 'emit');
    const container = fixture.nativeElement.querySelector('.modal-container');
    
    container.click();
    
    expect(closeSpy).not.toHaveBeenCalled();
  });

  it('should emit toggleClimbed event when button is clicked', () => {
    const toggleSpy = vi.spyOn(component.toggleClimbed, 'emit');
    const toggleBtn = fixture.nativeElement.querySelector('.climbed-overlay-btn');
    
    toggleBtn.click();
    
    expect(toggleSpy).toHaveBeenCalledWith(1);
  });

  it('should display trails', () => {
    const trailCards = fixture.nativeElement.querySelectorAll('.trail-card');
    expect(trailCards.length).toBe(1);
  });

  it('should return correct trail difficulty class', () => {
    expect(component.getTrailDifficultyClass('łatwy')).toBe('trail-easy');
    expect(component.getTrailDifficultyClass('umiarkowany')).toBe('trail-medium');
    expect(component.getTrailDifficultyClass('trudny')).toBe('trail-hard');
  });

  it('should close on Escape key', () => {
    const closeSpy = vi.spyOn(component.close, 'emit');
    
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);
    
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should disable body scroll when opened', () => {
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should restore body scroll when destroyed', () => {
    component.ngOnDestroy();
    expect(document.body.style.overflow).toBe('');
  });
});
