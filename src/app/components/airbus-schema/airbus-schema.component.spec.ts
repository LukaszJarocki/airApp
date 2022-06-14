import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbusSchemaComponent } from './airbus-schema.component';

describe('AirbusSchemaComponent', () => {
  let component: AirbusSchemaComponent;
  let fixture: ComponentFixture<AirbusSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirbusSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirbusSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
