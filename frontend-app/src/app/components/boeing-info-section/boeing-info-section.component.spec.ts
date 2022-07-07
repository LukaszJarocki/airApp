import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoeingInfoSectionComponent } from './boeing-info-section.component';

describe('BoeingInfoSectionComponent', () => {
  let component: BoeingInfoSectionComponent;
  let fixture: ComponentFixture<BoeingInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoeingInfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoeingInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
