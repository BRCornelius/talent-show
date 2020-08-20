import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidDisplayComponent } from './did-display.component';

describe('DidDisplayComponent', () => {
  let component: DidDisplayComponent;
  let fixture: ComponentFixture<DidDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
