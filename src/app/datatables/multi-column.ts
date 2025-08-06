import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './multi-column.html',
})
export class MultiColumnDatatableComponent {
    constructor() {}
    search = '';
    cols = [
        { field: 'firstName', title: 'User' },
        { field: 'company', title: 'Company' },
        { field: 'age', title: 'Age' },
        { field: 'dob', title: 'Start Date' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone No.' },
    ];

  rows: any[] = [];
    formatDate(date: any)  {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };
}
