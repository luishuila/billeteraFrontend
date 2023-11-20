
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppInterceptor implements HttpInterceptor {

  constructor(
  ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const locaStores = localStorage.getItem('token') != null ? localStorage.getItem('token'): ""

    const headers = new HttpHeaders(
      {
        Authorization: locaStores
      })

    const reqClor = req.clone({
      headers
    })

     return next.handle(reqClor).pipe(map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );


  }




}


