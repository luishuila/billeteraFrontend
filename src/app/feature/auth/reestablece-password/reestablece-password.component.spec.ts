import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestablecePasswordComponent } from './reestablece-password.component';

describe('ReestablecePasswordComponent', () => {
  let component: ReestablecePasswordComponent;
  let fixture: ComponentFixture<ReestablecePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReestablecePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReestablecePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
