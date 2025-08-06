import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './columns-filter.html',
})
export class ColumnsFilterDatatableComponent {
    constructor() {}
    search = '';
    cols = [
        { field: 'id', title: 'ID', isUnique: true, filter: false },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];

    rows: any[] = [];
    formatDate(date: any) {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    }
}
