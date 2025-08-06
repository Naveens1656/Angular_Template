import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './skin.html',
})
export class SkinDatatableComponent {
    constructor() {}
    search1 = '';
    search2 = '';
    search3 = '';
    search4 = '';
    search5 = '';
    cols = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
    ];

rows: any[] = [];
}
