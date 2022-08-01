import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BostonAboutComponent } from './boston-about.component';

describe('BostonAboutComponent', () => {
  let component: BostonAboutComponent;
  let fixture: ComponentFixture<BostonAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BostonAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BostonAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
