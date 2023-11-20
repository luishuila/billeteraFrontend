import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { cuentaCreateModels, cuentaInResponse, cuentaResponse } from '../models/cuentaModels';
@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  
  constructor(
    private _http: HttpClient,
  ) {

  }

  public postRecargaSaldo(data:cuentaCreateModels):  Observable<cuentaResponse  | any >{
    return this._http.post<Observable<cuentaResponse>>(`${environment.API}cuenta`,data)
  }
  public consultaSaldo(data:any){
    return this._http.post(`${environment.API}cuenta/saldo`,data)
  }


}
