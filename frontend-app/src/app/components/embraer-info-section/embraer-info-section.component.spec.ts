import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbraerInfoSectionComponent } from './embraer-info-section.component';

describe('EmbraerInfoSectionComponent', () => {
  let component: EmbraerInfoSectionComponent;
  let fixture: ComponentFixture<EmbraerInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbraerInfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbraerInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
