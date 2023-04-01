import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: UserService, private router: Router) { }

  isLoggedIn() {
    const user = this.authService.getCurrentUser()
    return !!user
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}