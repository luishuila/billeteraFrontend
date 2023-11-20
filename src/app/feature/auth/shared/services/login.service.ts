import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment.prod';
import { LoginModels } from '../models/Login.Models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: string

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {

  }

  public login(login: LoginModels) {
    const { email, password } = login;
    return this._http.post(`${environment.API}auth/login`, { email, password }).pipe(map((data: any) => {

      this.token = data.token;
      localStorage.setItem('data',  JSON.stringify(data.usuario) )
      localStorage.setItem('token', data.token)

    }
    ))
  }

  public  reestablecePassword(data: any) {
    return this._http.post(`${environment.API}auth/resetpassword`, data)
  }

  public  reestablecePasswordId(toque: any) {
    return this._http.get(`${environment.API}auth/resetpassword/${toque}`)
  }
  public  newReestablecePassword(data: any) {
    return this._http.post(`${environment.API}auth/newResetPassword`,data)
  }

  Authoticacion() {
    if (localStorage.getItem('token').length > 0) {
      return true

    }
    return false
  }


  logout() {

    localStorage.clear();
    return this._router.navigateByUrl('login');

  }

}
