import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileItem } from '../shared/models/file-item';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProductoService } from '../shared/services/producto.service';
import { NgDropFilesDirective } from '../shared/directives/ng-drop-files.directive';

@Component({
  selector: 'app-guardaproducto',
  templateUrl: './guardaproducto.component.html',
  styleUrls: ['./guardaproducto.component.scss']
})
export class GuardaproductoComponent implements OnInit {

  formu: FormGroup;
  estaSobreElemento = false;
  archivos: FileItem[] = [];
  spinner: boolean = false;
  constructor(private _productoService:ProductoService, private  router: Router,     private fb: FormBuilder) {

    this.formu = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      stock: [null,[Validators.required,Validators.min(1),Validators.pattern("^[-+]?[0-9]+$") ]],
      precio: [null,[Validators.required,Validators.min(1),Validators.pattern("^[-+]?[0-9]+$") ]]
    });
  }
  onFileSelected(event: any) {
    
     const dropFilesDirective  = new NgDropFilesDirective()
     dropFilesDirective._extraerArchivos(event.target.files)
     this.archivos = dropFilesDirective.archivos;
  }
  ngOnInit() {
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

  cargarImagenes() {
    var formData = new FormData();
    this.spinner = true;
    for (const key of this.archivos) {
      formData.append('archivo',key.archivo )
    }
    formData.append('nombre',this.formu.get('nombre').value )
    formData.append('stock',this.formu.get('stock').value )
    formData.append('precio',this.formu.get('precio').value )
  

    this._productoService.guardaProductos(formData).subscribe(data=> {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Exito`,
        html: ` <b>${data.msg} </b>`,
        showConfirmButton: false,
        timer: 2000
      })
      this.spinner = false;
      return this.router.navigateByUrl('/producto/listaproductos');

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

  limpiarArchivos(input: any) {
    input.value = null; 
    this.archivos = [];
  }
 

}
