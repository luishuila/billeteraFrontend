import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargacuentaComponent } from './recargacuenta.component';

describe('RecargacuentaComponent', () => {
  let component: RecargacuentaComponent;
  let fixture: ComponentFixture<RecargacuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecargacuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecargacuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
