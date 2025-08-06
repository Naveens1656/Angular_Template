import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './checkbox.html',
})
export class CheckboxDatatableComponent {
    constructor() {}
    search = '';
    cols = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
    ];

    rows: any[] = [];
}
