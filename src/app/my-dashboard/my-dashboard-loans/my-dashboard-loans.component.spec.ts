import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashboardLoansComponent } from './my-dashboard-loans.component';

describe('MyDashboardLoansComponent', () => {
  let component: MyDashboardLoansComponent;
  let fixture: ComponentFixture<MyDashboardLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashboardLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashboardLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
