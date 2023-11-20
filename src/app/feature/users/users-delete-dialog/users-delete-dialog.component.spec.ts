import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDeleteDialogComponent } from './users-delete-dialog.component';

describe('UsersDeleteDialogrComponent', () => {
  let component: UsersDeleteDialogComponent;
  let fixture: ComponentFixture<UsersDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
