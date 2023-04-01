import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_address: string = "http://localhost:3000";
  constructor(private http: HttpClient, private router: Router) { }



  newUser(Userdetails: any) {
    return this.http.post("http://localhost:5000/api/users", Userdetails)
      .subscribe(data => {
        console.log(data)
      }
      )
  }

  loginUser(user: any) {
    return this.http.post<any>("http://localhost:5000/api/users/login", user);
  }

}