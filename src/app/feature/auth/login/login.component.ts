import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModels } from '../shared/models/Login.Models';
import Swal from 'sweetalert2';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  formu: FormGroup;
  spinner:boolean = false;

  constructor(
    private _loginService: LoginService,
    private fb: FormBuilder,
    private  router: Router) {


  }
  ngOnInit(): void {
    this.formu = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(8),Validators.maxLength(50) ,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });

  }




  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
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
  getError(element: string) {
    if (this.formu.get(element).invalid && this.formu.get(element).touched) {

      if (this.formu.get(element).errors.required) {
        return "Email is required"
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




  login() {

    if (this.formu.invalid) {
      Object.values(this.formu.controls).forEach((datos:any)=>{
       datos.markAsTouched();
      })
      return ;
    }



    this.spinner = true;

    let login: LoginModels = new LoginModels(this.formu.get('email').value, this.formu.get('password').value);

    this._loginService.login(login).subscribe(data => {

        this.router.navigateByUrl('/users');

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
