import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearIndexComponent } from './gear-index.component';

describe('GearIndexComponent', () => {
  let component: GearIndexComponent;
  let fixture: ComponentFixture<GearIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
