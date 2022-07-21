import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisAboutComponent } from './paris-about.component';

describe('ParisAboutComponent', () => {
  let component: ParisAboutComponent;
  let fixture: ComponentFixture<ParisAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParisAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParisAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
