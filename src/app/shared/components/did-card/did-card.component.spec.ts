import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidCardComponent } from './did-card.component';

describe('DidCardComponent', () => {
  let component: DidCardComponent;
  let fixture: ComponentFixture<DidCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
