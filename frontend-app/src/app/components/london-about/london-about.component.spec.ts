import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonAboutComponent } from './london-about.component';

describe('LondonAboutComponent', () => {
  let component: LondonAboutComponent;
  let fixture: ComponentFixture<LondonAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LondonAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
