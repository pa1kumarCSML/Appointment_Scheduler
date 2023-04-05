import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverAddress: String = "api"
  // serverAddress:String = "http://localhost:5000/api"

  constructor(private http: HttpClient) { }



  newUser(Userdetails: any) {
    return this.http.post<any>(`${this.serverAddress}/users`, Userdetails)
  }

  loginUser(user: any) {
    return this.http.post<any>(`${this.serverAddress}/users/login`, user)
  }

}