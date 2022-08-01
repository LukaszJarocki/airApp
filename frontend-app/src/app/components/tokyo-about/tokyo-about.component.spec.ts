import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokyoAboutComponent } from './tokyo-about.component';

describe('TokyoAboutComponent', () => {
  let component: TokyoAboutComponent;
  let fixture: ComponentFixture<TokyoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokyoAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokyoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
