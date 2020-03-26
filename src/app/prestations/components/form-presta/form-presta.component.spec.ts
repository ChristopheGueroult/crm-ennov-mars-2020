import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrestaComponent } from './form-presta.component';

describe('FormPrestaComponent', () => {
  let component: FormPrestaComponent;
  let fixture: ComponentFixture<FormPrestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
