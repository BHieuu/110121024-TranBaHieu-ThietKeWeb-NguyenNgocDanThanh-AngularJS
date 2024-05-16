import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoviesPopularComponent } from './all-movies-popular.component';

describe('AllMoviesPopularComponent', () => {
  let component: AllMoviesPopularComponent;
  let fixture: ComponentFixture<AllMoviesPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllMoviesPopularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllMoviesPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
