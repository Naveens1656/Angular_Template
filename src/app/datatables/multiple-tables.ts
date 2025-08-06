import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './multiple-tables.html',
})
export class MultiTablesComponent {
    constructor() {}
    search1 = '';
    search2 = '';
    datatable1Cols = [
        { field: 'firstName', title: 'Name' },
        { field: 'company', title: 'Company' },
        { field: 'age', title: 'Age' },
        { field: 'dob', title: 'Start Date' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone No.' },
        { field: 'status', title: 'Status' },
        { field: 'action', title: 'Action', sort: false, headerClass: 'justify-center' },
    ];

    datatable2Cols = [
        { field: 'firstName', title: 'Name' },
        { field: 'age', title: 'Progress' },
        { field: 'company', title: 'Company' },
        { field: 'dob', title: 'Start Date' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone No.' },
        { field: 'action', title: 'Action', sort: false },
    ];

   rows: any[] = [];

    ngOnInit() {
        this.rows = this.rows.map((row) => {
            return {
                ...row,
                status: this.randomStatus(),
                statusColor: this.randomColor(),
            };
        });
    }

    formatDate(date: any) {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    }

    randomColor() {
        const color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
        const random = Math.floor(Math.random() * color.length);
        return color[random];
    }

    randomStatus() {
        const status = ['PAID', 'APPROVED', 'FAILED', 'CANCEL', 'SUCCESS', 'PENDING', 'COMPLETE'];
        const random = Math.floor(Math.random() * status.length);
        return status[random];
    }
}
