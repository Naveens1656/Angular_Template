import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: './add.html',
})
export class InvoiceAddComponent {
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
            description: ['', Validators.required],
            quantity: [1, Validators.required],
            price: [0, Validators.required],
        });
        this.items.push(item);
    }

    removeItem(index: number) {
        this.items.removeAt(index);
    }

    submit() {
        if (this.invoiceForm.valid) {
            console.log('Invoice Saved:', this.invoiceForm.value);
        }
    }
}
