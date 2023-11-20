import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../shared/services/producto.service';
import { environment } from 'src/environments/environment.prod';
import { ComprarService } from '../shared/services/comprar.service';
import { MatDialog } from '@angular/material/dialog';
import { FacturaProductoComponent } from '../factura-producto/factura-producto.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagaproducto',
  templateUrl: './pagaproducto.component.html',
  styleUrls: ['./pagaproducto.component.scss']
})
export class PagaproductoComponent implements OnInit {
  codigo:string ;
  urlImg = environment.APIimg;
  validaCarga = false;
  productos:any;
  spinner= false;


  constructor(public dialog: MatDialog,private _activatedRoute:ActivatedRoute,
    private _productoService:ProductoService,private _comprarService:ComprarService,private  router: Router) {
    this._activatedRoute.params.subscribe(datos=>this.codigo = datos.id)
   }

  ngOnInit(): void {
    this._productoService.getBuscarProducto(this.codigo).subscribe((data:any)=>{
     this.productos = data;
     this.validaCarga = true
    },(error)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        html: ` ${error.error.msg} `,
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigateByUrl('/producto/listaproductos');
   })
  }
  public validaImagenes(url,nombre, defecto){

    if (nombre != null) {
      return `${url}${nombre}`;
    }

    return defecto;
  }
  compra(){
    this.spinner = true;
    this._comprarService.pagaProductoCodigo(this.codigo).subscribe((data:any)=>{
      this.dialog.open(FacturaProductoComponent, {
        data:data.data
      });
      this.spinner = false;
    },(error)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        html: ` ${error.error.msg} `,
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigateByUrl('/producto/listaproductos');
      this.spinner = false;
   })
 

  }

}
