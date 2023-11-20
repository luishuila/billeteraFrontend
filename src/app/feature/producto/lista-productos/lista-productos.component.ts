import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ProductoService } from '../shared/services/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComprarComponent } from '../dialog-comprar/dialog-comprar.component';
import Swal from 'sweetalert2';
import { EliminarProductosDialogComponent } from '../eliminar-productos-dialog/eliminar-productos-dialog.component';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  urlImg = environment.APIimg;
  datos:any = [];
  validate = false;
  valida:boolean =  false;
  inputchecked:boolean = false;
  inputBuscar="";
  constructor(private _productoService:ProductoService, public dialog: MatDialog) {

   }

  public validaImagenes(url,nombre, defecto){

    if (nombre != null) {
      return `${url}${nombre}`;
    }

    return defecto;
  }

  ngOnInit(): void {
    this.valida = localStorage.getItem('token') != null ? true: false
    this.getData();
  }
  
  getData(){
    this._productoService.getProductos().subscribe((data:any)=>{
      this.validate = true;
      this.datos = data
 
    },(error)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        html: ` ${error.error.msg} `,
        showConfirmButton: false,
        timer: 2000
      })
   })
  }

  compra(data:any){
    this.dialog.open(DialogComprarComponent, {
      width: '250px',
      data:data
    });
  }
  delete(data:any){
    this.dialog.open(EliminarProductosDialogComponent, {
      width: '250px',
      data:data
    });
  }
}
