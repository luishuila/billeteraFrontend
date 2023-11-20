import { Component, OnInit,Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComprarService } from '../shared/services/comprar.service';
import { compraModels, detallesCompraModels } from '../shared/models/compraModels';
import { FacturaProductoComponent } from '../factura-producto/factura-producto.component';
@Component({
  selector: 'app-dialog-comprar',
  templateUrl: './dialog-comprar.component.html',
  styleUrls: ['./dialog-comprar.component.scss']
})
export class DialogComprarComponent implements OnInit {
  spinner: boolean = false;
  
  formu: FormGroup;
  detallesCompra:any;
  msg:string;
  pagarFormulario = false;
  codigo: string;


  constructor(private _comprarService:ComprarService, public dialogRef: MatDialogRef<DialogComprarComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,public dialog: MatDialog) { 
      this.formu = this.fb.group({
        documento:[null,[Validators.required,Validators.min(1000000),Validators.max(99999999999),Validators.pattern("^[-+]?[0-9]+$") ]],
        celular:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20),Validators.pattern("^[-+]?[0-9]+$")]],
        cantidad:[null,[Validators.required,Validators.min(1),Validators.max(parseInt(this.data.stock)),Validators.pattern("^[-+]?[0-9]+$") ]],
      });
     }

     ngOnInit(): void {
      
   
     }
  
     getError(element: string) {
      if (this.formu.get(element).invalid && this.formu.get(element).touched) {
  
        if (this.formu.get(element).errors.required) {
          return " required"
        }
        if (this.formu.get(element).errors.minlength) {
          return `el campo requiere un minimo de ${this.formu.get(element).errors.minlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.minlength.actualLength} `
        }
        if (this.formu.get(element).errors.maxlength) {
          return `el campo requiere un maximo de ${this.formu.get(element).errors.maxlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.maxlength.actualLength} `
        }
        if (this.formu.get(element).errors.email) {
          return `requiere se un email `
        }
  
        if (this.formu.get(element).errors.pattern) {
          return `comprueba que un email es válido`
        }
  
      }
    }
  getErrornumero(element:string){

    if( this.formu.get(element).invalid && this.formu.get(element).touched){

      if( this.formu.get(element).errors.pattern){
        return `el campo no se permiten caracteres especiales`
      }

      if(this.formu.get(element).errors.min){
        return `el campo  se requiere un  mínimo  ${this.formu.get(element).errors.min.min}  `
      }
      if(this.formu.get(element).errors.max){
        return `el campo se requiere un máximo   ${this.formu.get(element).errors.max.max}  `
      }
      if( this.formu.get(element).errors.minlength){
        return `el campo requiere un minimo de ${this.formu.get(element).errors.minlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.minlength.actualLength} `
      }
      if( this.formu.get(element).errors.maxlength){
        return `el campo requiere un maximo de ${this.formu.get(element).errors.maxlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.maxlength.actualLength} `
      }

      if( this.formu.get(element).errors.required){
        return "el campo es obligatorio"
      }

    }
  }


  compra(){
    if (this.formu.invalid) {
      Object.values(this.formu.controls).forEach((datos:any)=>{
       datos.markAsTouched();
      })
      return ;
    }

   
    let comprar: compraModels = new compraModels(this.data.id,  
      this.formu.get('cantidad').value,this.formu.get('documento').value, 
       this.formu.get('celular').value);
       this.spinner = true;
    this._comprarService.comprarProducto(comprar).subscribe((data:any)=>{
      this.msg= data.msg;
      this.detallesCompra = data.datos;
      this.pagarFormulario = true;
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
      this.spinner = false;
    })

    
    this.spinner = false;
  }
  
  paga(){
    if(this.codigo == null){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        html: ` Codigo es requerido`,
        showConfirmButton: false,
        timer: 2000
      })
      return null;
    }
    

   let  detallesCompra:detallesCompraModels = new detallesCompraModels(this.detallesCompra.id,this.formu.get('documento').value,this.codigo);
   this.spinner = true;
   this._comprarService.pagaProducto(detallesCompra).subscribe((data:any)=>{
    this.dialog.open(FacturaProductoComponent, {
      data:data.data
    });
    this.dialogRef.close();
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
    this.spinner = false;

   })
   

  }
}
