import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  Appointment=[{
    Description: String,
    Duration: Number,
    NoOfParticipants:Number,
    DateTime: Date,
    userId: String
  }]

  constructor(private http: HttpClient, private router:Router) { }
  NewAppointment(Appointmentdetails: any) {
    return this.http.post("http://localhost:5000/api/appointments", { "Appointment": Appointmentdetails })
      .subscribe(data => { console.log(data) }
       )
  }

  getAppointment(userId: any)
  {
    console.log(userId);
    return this.http.get("http://localhost:5000/api/appointments/"+ userId)
  }
}
