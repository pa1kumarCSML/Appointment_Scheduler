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
  user: any = null
  constructor(private router: Router) { }

  logOut() {
    localStorage.removeItem('user')
    this.router.navigate(['login']);
    this.isLoggedIn = false
  }

  onActivate(componentRef: any) {
    const user: any = localStorage.getItem("user") || null
    if (user && JSON.parse(user).token) {
      this.isLoggedIn = true
      this.user = JSON.parse(user)
    } else {
      this.isLoggedIn = false
      this.user = null

    }
  }
}
