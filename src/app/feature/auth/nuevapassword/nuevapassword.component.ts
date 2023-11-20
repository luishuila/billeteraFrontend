import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevapassword',
  templateUrl: './nuevapassword.component.html',
  styleUrls: ['./nuevapassword.component.scss']
})
export class NuevapasswordComponent implements OnInit {
  toque:String

  hide = true;
  formu: FormGroup;
  validate= false
  spinner:boolean = false;
  usuarios:any
  constructor(private _activatedRoute:ActivatedRoute,private  router: Router,
    private _loginService: LoginService,    private fb: FormBuilder) { 
    this._activatedRoute.params.subscribe(datos=>this.toque = datos.id)
  }



  ngOnInit(): void {
    this._loginService.reestablecePasswordId(this.toque).subscribe((data:any)=>{

     this.usuarios = data.data
      this.validate = true
    },(error)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        html: ` ${error.error.msg} `,
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigateByUrl('/login');
   })
    this.formu = this.fb.group({
   
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
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
 




  save() {

    if (this.formu.invalid) {
      Object.values(this.formu.controls).forEach((datos:any)=>{
       datos.markAsTouched();
      })
      return ;
    }


    const data = {
      password:this.formu.get('password').value,
      token:this.toque 
    }
    this._loginService.newReestablecePassword(data).subscribe((data:any)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Exito`,
        html: data.msg,
        showConfirmButton: false,
        timer: 2000
      })
      this.spinner = false;
      this.router.navigateByUrl('/login');
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
