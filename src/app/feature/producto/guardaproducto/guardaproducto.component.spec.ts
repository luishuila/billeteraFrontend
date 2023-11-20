import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardaproductoComponent } from './guardaproducto.component';

describe('GuardaproductoComponent', () => {
  let component: GuardaproductoComponent;
  let fixture: ComponentFixture<GuardaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardaproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
