import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradedListItemComponent } from './graded-list-item.component';

describe('GradedListItemComponent', () => {
  let component: GradedListItemComponent;
  let fixture: ComponentFixture<GradedListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradedListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
