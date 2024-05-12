import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningJourneyWrapComponent } from './learning-journey-wrap.component';

describe('LearningJourneyWrapComponent', () => {
  let component: LearningJourneyWrapComponent;
  let fixture: ComponentFixture<LearningJourneyWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningJourneyWrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningJourneyWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
