import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  usuariosCreateModels } from '../shared/Models/Users.Models';
import Swal from 'sweetalert2';
import { UsersService } from '../shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit{
hide = true;
  formu: FormGroup;
  disable = false
  spinner:boolean = false;

  constructor(
    private _usersService: UsersService,
    private fb: FormBuilder,
    private  router: Router) {


  }
  ngOnInit(): void {
    this.formu = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(8),Validators.maxLength(50) ,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      documento:[null,[Validators.required,Validators.min(1000000),Validators.max(99999999999),Validators.pattern("^[-+]?[0-9]+$") ]],
      nombre:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      celular:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });

  }



 
  getErrorPassword(element: string) {
    if (this.formu.get(element).invalid && this.formu.get(element).touched) {

      if (this.formu.get(element).errors.required) {
        return "Password is required"
      }
      if (this.formu.get(element).errors.minlength) {
        return `The minimum of characters will be 8`
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


    let users: usuariosCreateModels = new usuariosCreateModels(
      this.formu.get('nombre').value,this.formu.get('documento').value, 
       this.formu.get('email').value, this.formu.get('password').value,
       this.formu.get('celular').value,null);
    this.spinner = true;
    this._usersService.createUser(users).subscribe(data=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Exito`,
        html: `Gracias por registrarte con éxito <b>${this.formu.get('nombre').value} </b>`,
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigateByUrl('/users/list');
      this.spinner = false;
    },(error)=>{

      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        html: ` ${error.error.error} `,
        showConfirmButton: false,
        timer: 2000
      })
      this.spinner = false;
    })

  }
}

