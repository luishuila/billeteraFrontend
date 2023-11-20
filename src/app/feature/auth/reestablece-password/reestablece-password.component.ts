import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reestablece-password',
  templateUrl: './reestablece-password.component.html',
  styleUrls: ['./reestablece-password.component.scss']
})
export class ReestablecePasswordComponent implements OnInit {
  formu: FormGroup;
  disable = false
  spinner:boolean = false;
  txtMsg:string = null;
  constructor(

    private fb: FormBuilder,
    private _loginService: LoginService
    ) {


  }
  ngOnInit(): void {
    this.formu = this.fb.group({
      documento:[null,[Validators.required,Validators.min(1000000),Validators.max(99999999999),Validators.pattern("^[-+]?[0-9]+$") ]]
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



  save() {
    if (this.formu.invalid) {
      Object.values(this.formu.controls).forEach((datos:any)=>{
       datos.markAsTouched();
      })
      return ;
    }
   const data = {
    documento:this.formu.get('documento').value
   }

   this._loginService.reestablecePassword(data).subscribe((data:any)=>{
    this.txtMsg = data.msg;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Exito`,
      html: data.msg,
      showConfirmButton: false,
      timer: 2000
    })
    this.spinner = false;
    // return this.router.navigateByUrl('/cuenta/consultaSaldo');
 
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
