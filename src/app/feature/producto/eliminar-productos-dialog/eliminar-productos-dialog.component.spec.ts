import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductosDialogComponent } from './eliminar-productos-dialog.component';

describe('EliminarProductosDialogComponent', () => {
  let component: EliminarProductosDialogComponent;
  let fixture: ComponentFixture<EliminarProductosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProductosDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProductosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
