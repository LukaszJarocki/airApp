import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormSectionComponent } from './book-form-section.component';

describe('BookFormSectionComponent', () => {
  let component: BookFormSectionComponent;
  let fixture: ComponentFixture<BookFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
