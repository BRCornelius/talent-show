import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoDisplayComponent } from './pto-display.component';

describe('PtoDisplayComponent', () => {
  let component: PtoDisplayComponent;
  let fixture: ComponentFixture<PtoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
