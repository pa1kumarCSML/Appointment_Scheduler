import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  loginUser(user:any)
  {
    return this.http.post<any>("http://localhost:5000/api/users/login",user);
  }
}
