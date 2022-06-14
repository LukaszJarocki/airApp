import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationSectionComponent } from './destination-section.component';

describe('DestinationSectionComponent', () => {
  let component: DestinationSectionComponent;
  let fixture: ComponentFixture<DestinationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
