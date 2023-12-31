import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaProductoComponent } from './factura-producto.component';

describe('FacturaProductoComponent', () => {
  let component: FacturaProductoComponent;
  let fixture: ComponentFixture<FacturaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
