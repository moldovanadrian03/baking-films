import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenCarousel } from './full-screen-carousel';

describe('FullScreenCarousel', () => {
  let component: FullScreenCarousel;
  let fixture: ComponentFixture<FullScreenCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullScreenCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(FullScreenCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
