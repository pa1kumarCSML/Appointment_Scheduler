import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  NewAppointment(Appointmentdetails: any) {
    return this.http.post("http://localhost:5000/api/appointments", Appointmentdetails)
  }

  getAppointment() {
    return this.http.get("http://localhost:5000/api/appointments")
  }

  getCurrentUserDetails() {
    const user: any = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  deleteDetails(userId: any) {
    return this.http.delete("http://localhost:5000/api/appointments/" + userId)
  }
  getAppointmentsForDate(date: any) {
    return this.http.get("http://localhost:5000/api/appointments/" + date)
  }

}
