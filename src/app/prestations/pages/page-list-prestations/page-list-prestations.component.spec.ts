import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListPrestationsComponent } from './page-list-prestations.component';

describe('PageListPrestationsComponent', () => {
  let component: PageListPrestationsComponent;
  let fixture: ComponentFixture<PageListPrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListPrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
