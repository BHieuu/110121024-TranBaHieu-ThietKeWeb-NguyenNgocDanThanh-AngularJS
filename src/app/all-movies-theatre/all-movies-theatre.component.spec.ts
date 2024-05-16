import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoviesTheatreComponent } from './all-movies-theatre.component';

describe('AllMoviesTheatreComponent', () => {
  let component: AllMoviesTheatreComponent;
  let fixture: ComponentFixture<AllMoviesTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllMoviesTheatreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllMoviesTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
