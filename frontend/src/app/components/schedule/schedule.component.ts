import { Component } from '@angular/core';


@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html'
})

export class ScheduleComponent {

    privs = ["view", "book", "myappointments", "requests"]
    activeTask = ""





    constructor() {
        this.activeTask = this.privs[0].toLowerCase()
    }


    onClick(task: string) {
        if (!!this.privs.filter(priv => priv.toLowerCase() === task.toLowerCase())) {
            this.activeTask = task.toLowerCase();
        }
    }


}
