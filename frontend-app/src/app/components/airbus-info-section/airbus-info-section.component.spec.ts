import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbusInfoSectionComponent } from './airbus-info-section.component';

describe('AirbusInfoSectionComponent', () => {
  let component: AirbusInfoSectionComponent;
  let fixture: ComponentFixture<AirbusInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirbusInfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirbusInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
