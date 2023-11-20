import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ProductoService } from '../shared/services/producto.service';

@Component({
  selector: 'app-eliminar-productos-dialog',
  templateUrl: './eliminar-productos-dialog.component.html',
  styleUrls: ['./eliminar-productos-dialog.component.scss']
})
export class EliminarProductosDialogComponent implements OnInit {

  spinner: boolean = false;
  constructor(private _productoService:ProductoService, public dialogRef: MatDialogRef<EliminarProductosDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  delete() {

    this._productoService.deleteEliminarProductos(this.data.id).subscribe(data => {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data.msg,
        showConfirmButton: false,
        timer: 1500
      })
      this.dialogRef.close();
    }, (error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        html: ` ${error.error.msg} `,
        showConfirmButton: false,
        timer: 2000
      })
      this.spinner = false;
    })
  }
}
