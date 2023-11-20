import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { compraModels, detallesCompraModels } from '../models/compraModels';
@Injectable({
  providedIn: 'root'
})
export class ComprarService {
  constructor(
    private _http: HttpClient,
  ) {

  }
  public comprarProducto(data: compraModels): Observable<any> {
    return this._http.post<Observable<any>>(`${environment.API}compra`, data)
  }

  public pagaProducto(data: detallesCompraModels): Observable<any> {
    return this._http.post<Observable<any>>(`${environment.API}compra/paga`, data)
  }

  public pagaProductoCodigo(id: string): Observable<any> {
    return this._http.get<Observable<any>>(`${environment.API}compra/paga/${id}`)
  }
}
