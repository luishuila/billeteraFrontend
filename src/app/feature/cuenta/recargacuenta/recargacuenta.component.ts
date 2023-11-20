import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cuentaCreateModels, cuentaResponse } from '../shared/models/cuentaModels';
import { CuentaService } from '../shared/services/cuenta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recargacuenta',
  templateUrl: './recargacuenta.component.html',
  styleUrls: ['./recargacuenta.component.scss']
})
export class RecargacuentaComponent implements OnInit {

  formu: FormGroup;
  spinner:boolean = false;

  constructor(

    private fb: FormBuilder,
    private  router: Router,
    private _cuentaService: CuentaService,
    ) {


  }
  ngOnInit(): void {
    this.formu = this.fb.group({
      documento:[null,[Validators.required,Validators.min(1000000),Validators.max(99999999999),Validators.pattern("^[-+]?[0-9]+$") ]],
      celular:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      saldo:[null,[Validators.required,Validators.min(100),Validators.pattern("^[-+]?[0-9]+$") ]],
    });

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


  save() {
    if (this.formu.invalid) {
      Object.values(this.formu.controls).forEach((datos:any)=>{
       datos.markAsTouched();
      })
      return ;
    }
    let cuenta: cuentaCreateModels = new cuentaCreateModels(
      this.formu.get('documento').value,this.formu.get('celular').value, this.formu.get('saldo').value
     );
    this.spinner = true;
    this._cuentaService.postRecargaSaldo(cuenta).subscribe((data:cuentaResponse)=>{
    
 
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Exito`,
        html: data.msg,
        showConfirmButton: false,
        timer: 2000
      })
      this.spinner = false;
      return this.router.navigateByUrl('/cuenta/consultaSaldo');
   
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
