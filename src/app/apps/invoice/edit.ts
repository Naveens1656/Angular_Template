import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: './edit.html',
})
export class InvoiceEditComponent {
    invoiceForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.invoiceForm = this.fb.group({
            invoiceNo: [''],
            date: [''],
            dueDate: [''],
            customer: [''],
            items: this.fb.array([]),
        });
    }

    get items(): FormArray {
        return this.invoiceForm.get('items') as FormArray;
    }

    addItem() {
        const item = this.fb.group({
            description: [''],
            quantity: [1],
            price: [0],
        });
        this.items.push(item);
    }

    removeItem(index: number) {
        this.items.removeAt(index);
    }

    saveChanges() {
        console.log('Edited Invoice:', this.invoiceForm.value);
    }
}
