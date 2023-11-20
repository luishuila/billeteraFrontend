import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  constructor(private _router: Router) {

  }
  canActivate(): boolean {
    if (localStorage.getItem('token') != undefined) {
      if (localStorage.getItem('token').length > 0) {

        return true
      }
    }else {
      this._router.navigateByUrl('../login')
      return false
    }
  }


}
