import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearNewComponent } from './gear-new.component';

describe('GearNewComponent', () => {
  let component: GearNewComponent;
  let fixture: ComponentFixture<GearNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
