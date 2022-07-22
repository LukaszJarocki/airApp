import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeijingAboutComponent } from './beijing-about.component';

describe('BeijingAboutComponent', () => {
  let component: BeijingAboutComponent;
  let fixture: ComponentFixture<BeijingAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeijingAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeijingAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
