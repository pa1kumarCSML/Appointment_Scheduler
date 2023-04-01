import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    RollNo: '',
    Role: 1,
    Status: 1//1-active,0-inactive
  }

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  Adduser() {
    this.userService.NewUser(this.NewUser);
    //this.router.navigate(["login"]);
  }

}
