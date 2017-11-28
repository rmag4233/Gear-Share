import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashboardLoanEditComponent } from './my-dashboard-loan-edit.component';

describe('MyDashboardLoanEditComponent', () => {
  let component: MyDashboardLoanEditComponent;
  let fixture: ComponentFixture<MyDashboardLoanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashboardLoanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashboardLoanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
