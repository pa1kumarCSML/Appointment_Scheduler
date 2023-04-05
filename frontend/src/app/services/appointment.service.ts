import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  serverAddress: String = "api"
  // serverAddress:String = "http://localhost:5000/api"

  constructor(private http: HttpClient) { }

  NewAppointment(Appointmentdetails: any) {
    return this.http.post(`${this.serverAddress}/appointments`, Appointmentdetails)
  }

  getAppointment() {
    return this.http.get(`${this.serverAddress}/appointments`)
  }

  getAppointmentById(id: any) {
    return this.http.get(`${this.serverAddress}/appointments/get/` + id)
  }

  updateAppointment(id: any, data: any) {
    return this.http.put(`${this.serverAddress}/appointments/` + id, data)

  }

  getCurrentUserDetails() {
    const user: any = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  deleteDetails(userId: any) {
    return this.http.delete(`${this.serverAddress}/appointments/` + userId)
  }

  getAppointmentsForDate(date: any) {
    return this.http.get(`${this.serverAddress}/appointments/` + date)
  }

  //Request Appointment related services

  getReqAppointments() {
    return this.http.get(`${this.serverAddress}/requests`)
  }

  updateReqAppointment(id: any, status: any) {
    return this.http.put(`${this.serverAddress}/requests/` + id, { Status: status })
  }
  deleteReqAppointment(id: any) {
    return this.http.delete(`${this.serverAddress}/requests/` + id)

  }
}
