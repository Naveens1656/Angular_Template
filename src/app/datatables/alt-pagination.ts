import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './alt-pagination.html',
})
export class AltPaginationDatatableComponent {
    constructor() {}
    search1 = '';
    search2 = '';
    search3 = '';
    search4 = '';
    cols = [
        { field: 'id', title: 'ID' },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
    ];

    rows: any[] = [];
}
