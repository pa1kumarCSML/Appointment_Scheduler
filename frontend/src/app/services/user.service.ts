import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_address: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }



  newUser(Userdetails: any) {
    return this.http.post<any>("http://localhost:5000/api/users", Userdetails)
  }

  loginUser(user: any) {
    return this.http.post<any>("http://localhost:5000/api/users/login", user)
  }

}