import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  User = {
    Email: '',
    Password: ''
  };
  error_msg: any;

  constructor(private _login: UserService, private _router: Router) {
  }

  userLogin() {
    this._login.loginUser(this.User)
      .subscribe((res) => {
        const user: any = JSON.stringify(res)
        if (user && JSON.parse(user).token) {
          localStorage.setItem("user", user);
          this._router.navigate(['schedule']);
        }
      }
      )
  }

  logOut() {
    localStorage.removeItem('user')
    this._router.navigate(['login']);

  }


}
