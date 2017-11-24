import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearShowComponent } from './gear-show.component';

describe('GearShowComponent', () => {
  let component: GearShowComponent;
  let fixture: ComponentFixture<GearShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
