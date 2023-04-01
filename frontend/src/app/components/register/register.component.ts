import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  NewUser={
    Name:'',
    Email:'',
    Password:'',
    RollNo:'',
    Role: 1,
    Status:'Active'
  }
  constructor(public userService:UserService,private router:Router) { }
  ngOnInit(): void {
  }
    
  Adduser() {
    console.log("i");
    this.userService.NewUser(this.NewUser);
    console.log("Hii");
    this.router.navigate(["login"]);
  }
}
