import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPrestaComponent } from './detail-presta.component';

describe('DetailPrestaComponent', () => {
  let component: DetailPrestaComponent;
  let fixture: ComponentFixture<DetailPrestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPrestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
