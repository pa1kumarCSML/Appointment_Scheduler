import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient, private router:Router) { }
  NewAppointment(Appointmentdetails: any) {
    return this.http.post("http://localhost:5000/api/appointments", { "Appointment": Appointmentdetails })
      .subscribe(data => { console.log(data) }
       )
  }
}
