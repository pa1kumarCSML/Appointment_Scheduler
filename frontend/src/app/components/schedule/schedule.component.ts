import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html'
})

export class ScheduleComponent {

    privs = ["view", "book", "myappointments", "requests"]
    activeTask = ""
    isAdmin: boolean = false;
    editSlot: any = { edit: false, id: null };

    constructor(private appointmentservice: AppointmentService) {
        this.activeTask = this.privs[0].toLowerCase()
    }

    ngOnInit(): void {
        const currentUser = this.appointmentservice.getCurrentUserDetails()
        if (currentUser && currentUser.Role) {
            this.isAdmin = currentUser.IsAdmin
        }
    }


    onClick(task: string) {
        if (!!this.privs.filter(priv => priv.toLowerCase() === task.toLowerCase())) {
            this.activeTask = task.toLowerCase();
        }
        this.editSlot = { edit: false, id: null }
    }

    slotBookedChangeToMyApps(e: any) {
        if (e && e.slotBooked) {
            this.onClick(e.changeTo)
        }
    }

    updateSlot(e: any) {
        if (e && e.id) {
            this.editSlot.edit = e.edit || false
            this.editSlot.id = e.id || null
            this.activeTask = e.changeTo.toLowerCase()
        }
    }


}
