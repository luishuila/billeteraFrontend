import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {

  }
  public getProductos(): Observable<any> {
    return this._http.get<Observable<any>>(`${environment.API}productos`)
  }
  public getBuscarProducto(id:string): Observable<any> {
    return this._http.get<Observable<any>>(`${environment.API}productos/${id}`)
  }

  public guardaProductos(files:any): Observable<any> {
    return this._http.post<Observable<any>>(`${environment.API}productos`, files,{ observe: 'response' })
  }
  public deleteEliminarProductos(id:string): Observable<any> {
    return this._http.delete(`${environment.API}productos/${id}`)
  }

  
}
