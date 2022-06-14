import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbraerSchemaComponent } from './embraer-schema.component';

describe('EmbraerSchemaComponent', () => {
  let component: EmbraerSchemaComponent;
  let fixture: ComponentFixture<EmbraerSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbraerSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbraerSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
