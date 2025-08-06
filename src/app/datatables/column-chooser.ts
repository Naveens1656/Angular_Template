import { Component } from '@angular/core';
import { colDef } from '@bhplugin/ng-datatable';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    moduleId: module.id,
    templateUrl: './column-chooser.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class ColumnChooserDatatableComponent {
    constructor() {}
    search = '';
    cols = [
        { field: 'id', title: 'ID', isUnique: true, hide: false },
        { field: 'firstName', title: 'First Name', hide: false },
        { field: 'lastName', title: 'Last Name', hide: false },
        { field: 'email', title: 'Email', hide: false },
        { field: 'phone', title: 'Phone', hide: false },
        { field: 'company', title: 'Company', hide: false },
        { field: 'address.street', title: 'Address', hide: false },
        { field: 'age', title: 'Age', type: 'number', hide: true },
        { field: 'dob', title: 'Birthdate', type: 'date', hide: true },
        { field: 'isActive', title: 'Active', type: 'bool', hide: true },
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

    updateColumn(col: colDef) {
        col.hide = !col.hide;
        this.cols = [...this.cols]; // Create a new reference of the array
    }
}
