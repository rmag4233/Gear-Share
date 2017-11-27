import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashboardIndexComponent } from './my-dashboard-index.component';

describe('MyDashboardIndexComponent', () => {
  let component: MyDashboardIndexComponent;
  let fixture: ComponentFixture<MyDashboardIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashboardIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashboardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
