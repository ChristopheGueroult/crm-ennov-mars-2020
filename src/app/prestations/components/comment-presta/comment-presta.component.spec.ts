import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPrestaComponent } from './comment-presta.component';

describe('CommentPrestaComponent', () => {
  let component: CommentPrestaComponent;
  let fixture: ComponentFixture<CommentPrestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentPrestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
