import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnotificationsComponent } from './addnotifications.component';

describe('AddnotificationsComponent', () => {
  let component: AddnotificationsComponent;
  let fixture: ComponentFixture<AddnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
