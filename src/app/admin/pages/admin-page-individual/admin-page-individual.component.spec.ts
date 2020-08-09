import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageIndividualComponent } from './admin-page-individual.component';

describe('AdminPageIndividualComponent', () => {
  let component: AdminPageIndividualComponent;
  let fixture: ComponentFixture<AdminPageIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
