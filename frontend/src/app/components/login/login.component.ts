import { Component , OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  User={Email:'',
  Password:''};
  error_msg:any;

  constructor(private _login: LoginService, private _router:Router) { }
    loginUser()
  {
    
    this._login.loginUser(this.User)
    .subscribe(
      res=>{
        if(res){
        localStorage.setItem('token',res.token)
        localStorage.setItem("Email", this.User.Email.toString());
        localStorage.setItem('is_user','true');
        localStorage.setItem("userId", res._id.toString());
        this._router.navigate(['/schedule']);
        } else {
          this.error_msg=true
          setTimeout(()=>{this.error_msg=false},4000)
        }
      }
    )

  }

  ngOnInit(): void {
  }

}
