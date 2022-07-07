import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIWeatherSectionComponent } from './api-weather-section.component';

describe('APIWeatherSectionComponent', () => {
  let component: APIWeatherSectionComponent;
  let fixture: ComponentFixture<APIWeatherSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIWeatherSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIWeatherSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
