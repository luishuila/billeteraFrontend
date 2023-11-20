
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {usuariosResponse } from 'src/app/feature/users/shared/Models/Users.Models';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class UsersService {



  constructor(
    private _http: HttpClient
  ) {

  }

  public getUsers(): Observable<any> {
    return this._http.get<Observable<usuariosResponse>>(`${environment.API}usuarios`)
  }

  public deleteUser(id: string): Observable<any> {
    return this._http.delete(`${environment.API}usuarios/${id}`)
  }
  public createUser(data: any): Observable<any> {
    return this._http.post<Observable<any>>(`${environment.API}usuarios`, data)
  }


}
