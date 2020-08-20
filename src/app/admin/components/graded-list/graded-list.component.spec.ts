import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradedListComponent } from './graded-list.component';

describe('GradedListComponent', () => {
  let component: GradedListComponent;
  let fixture: ComponentFixture<GradedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
