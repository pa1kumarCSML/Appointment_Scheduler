import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})


export class BookSlotComponent {

  @Output() slotBooked = new EventEmitter<object>()
  @Input() editSlot = { edit: false, id: null }

  NewAppointment = {
    Description: '',
    Duration: 15,
    NoOfParticipants: 1,
    DateTime: this.getCurrentDateTime(),
    userId: null
  }
  constructor(public appointmentService: AppointmentService) { }

  ngOnInit(): void {
    if (this.editSlot && this.editSlot.edit && this.editSlot.id) {
      this.appointmentService.getAppointmentById(this.editSlot.id).subscribe((data: any) => {
        if (data) {
          this.NewAppointment = data
        }
      })
    }
  }

  updateAppointment() {
    this.appointmentService.updateAppointment(this.editSlot.id, this.NewAppointment).subscribe(data => {
      if (data) {
        //success
        this.slotBooked.emit({ slotBooked: true, changeTo: "myappointments" });
      } else {
        //error message
      }
    })
  }


  Addappointment() {
    if (this.editSlot.edit) {
      this.updateAppointment()
      return
    }
    this.appointmentService.NewAppointment(this.NewAppointment)
      .subscribe(data => {
        if (data) {
          //success
          this.slotBooked.emit({ slotBooked: true, changeTo: "myappointments" });
        } else {
          //error message
        }
      }
      )
  }

  getCurrentDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.padZero(now.getMonth() + 1);
    const day = this.padZero(now.getDate());
    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  private padZero(num: number): string {
    return num.toString().padStart(2, '0');
  }

}
