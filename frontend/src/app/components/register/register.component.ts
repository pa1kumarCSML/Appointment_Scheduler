import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  NewUser = {
    Name: '',
    Email: '',
    Password: '',
    RollNo: null,
    Role: 1,
    Status: 1//1-active,0-inactive
  }

  constructor(public userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  Adduser() {
    if (this.NewUser.Role != 1) {
      this.NewUser.RollNo = null
    }
    this.userService.newUser(this.NewUser)
      .subscribe((res) => {
        const user: any = JSON.stringify(res)
        if (user && JSON.parse(user).Id) {
          this._router.navigate(['login']);
        }
      }
      )
  }

}
