import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './sticky-header.html',
})
export class StickyHeaderDatatableComponent {
    constructor() {}
    search1 = '';
    search2 = '';
    search3 = '';
    cols1 = [
        { field: 'id', title: 'ID', isUnique: true, filter: false },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
    ];
    cols2 = [
        { field: 'id', title: 'ID', isUnique: true, filter: false },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
        { field: 'company', title: 'Company' },
        { field: 'address.street', title: 'Address' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];
    cols3 = [
        { field: 'id', title: 'ID', isUnique: true, filter: false },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
        { field: 'company', title: 'Company' },
        { field: 'address.street', title: 'Address' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ];

rows: any[] = [];
}
