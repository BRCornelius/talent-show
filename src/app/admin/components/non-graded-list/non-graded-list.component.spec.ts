import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGradedListComponent } from './non-graded-list.component';

describe('NonGradedListComponent', () => {
  let component: NonGradedListComponent;
  let fixture: ComponentFixture<NonGradedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonGradedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonGradedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
