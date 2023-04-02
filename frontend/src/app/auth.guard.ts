import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private _route: Router) { }

  isUserLogin() {
    const user: any = localStorage.getItem("user")
    if (user && JSON.parse(user).token && this.isTokenValid(JSON.parse(user).token)) {
      return true
    }
    return false
  }

  isTokenValid(token: any) {
    //check token expiration
    return true;
  }

  logOut() {
    localStorage.removeItem('user')
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isUserLogin()) {
      this._route.navigate(["schedule"])
      return false;
    }
    return true;
  }

  canLoad(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.isUserLogin()) {
      this._route.navigate(["login"])
      return false;
    }
    return true;
  }
}
