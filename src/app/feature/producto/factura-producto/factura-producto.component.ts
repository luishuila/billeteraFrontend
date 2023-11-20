import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-factura-producto',
  templateUrl: './factura-producto.component.html',
  styleUrls: ['./factura-producto.component.scss']
})
export class FacturaProductoComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<FacturaProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private  router: Router) { }

  ngOnInit(): void {
  }


  salir(){
     this.router.navigateByUrl('/producto/listaproductos');
    this.dialogRef.close();
  }
}
