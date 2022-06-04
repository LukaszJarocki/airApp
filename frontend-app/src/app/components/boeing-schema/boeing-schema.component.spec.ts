import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoeingSchemaComponent } from './boeing-schema.component';

describe('BoeingSchemaComponent', () => {
  let component: BoeingSchemaComponent;
  let fixture: ComponentFixture<BoeingSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoeingSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoeingSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
