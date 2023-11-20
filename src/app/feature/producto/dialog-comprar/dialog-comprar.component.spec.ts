import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComprarComponent } from './dialog-comprar.component';

describe('DialogComprarComponent', () => {
  let component: DialogComprarComponent;
  let fixture: ComponentFixture<DialogComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComprarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
