import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
    moduleId: module.id,
    templateUrl: './calendar.html',
})
export class CalendarComponent {
    calendarOptions: any = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        selectable: true,
        editable: true,
        events: [], // ✅ Dummy events removed
        dateClick: this.handleDateClick.bind(this),
    };

    handleDateClick(arg: any) {
        const title = prompt('Enter event title:');
        if (title) {
            this.calendarOptions.events = [
                ...this.calendarOptions.events,
                { title, start: arg.date, allDay: arg.allDay },
            ];
        }
    }
}
