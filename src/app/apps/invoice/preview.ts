import { Component } from '@angular/core';

interface InvoiceItem {
    description: string;
    quantity: number;
    price: number;
}

@Component({
    moduleId: module.id,
    templateUrl: './preview.html',
})
export class InvoicePreviewComponent {
    invoice = {
        invoiceNo: '',
        date: '',
        dueDate: '',
        customer: '',
        items: [] as InvoiceItem[],
        total: 0
    };

    constructor() {
        // Optionally recalculate total if items are loaded dynamically
        this.calculateTotal();
    }

    calculateTotal(): void {
        this.invoice.total = this.invoice.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    }
}
