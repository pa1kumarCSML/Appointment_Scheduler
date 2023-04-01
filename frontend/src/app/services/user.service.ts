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

  // login(username: string, password: string): Observable<any> {
  //   const body = { username, password };
  //   return this.http.post(`${this.apiUrl}/login`, body).pipe(
  //     tap((response) => {

  //     })
  //   );
  // }

  // const user: any = data
  //       if (user && user["token"]) {
  //         localStorage.setItem('user', user);
  //         this.router.navigate(["schedule"])
  //       }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getCurrentUser(): any {
    const user: any = localStorage.getItem('user');
    if (!user || !user["token"]) {
      return null;
    }
    const token = user["token"]
    return user
  }

}