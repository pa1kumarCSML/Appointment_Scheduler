import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appointment Scheduler';
  isLoggedIn: boolean = false;
  constructor(private router: Router) { }

  logOut() {
    localStorage.removeItem('user')
    this.router.navigate(['login']);
    this.isLoggedIn = false
  }

  onActivate(componentRef: any) {
    const user: any = localStorage.getItem("user")
    if (user && JSON.parse(user).token) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }
}
