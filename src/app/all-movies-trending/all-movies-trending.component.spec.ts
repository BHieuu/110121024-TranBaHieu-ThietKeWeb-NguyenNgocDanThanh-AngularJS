import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoviesTrendingComponent } from './all-movies-trending.component';

describe('AllMoviesTrendingComponent', () => {
  let component: AllMoviesTrendingComponent;
  let fixture: ComponentFixture<AllMoviesTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllMoviesTrendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllMoviesTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
