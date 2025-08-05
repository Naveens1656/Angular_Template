import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './list.html',
})
export class InvoiceListComponent {
    invoices: any[] = []; // ✅ All dummy invoice data removed
    search = '';

    deleteInvoice(invoice: any) {
        this.invoices = this.invoices.filter(i => i !== invoice);
    }
}
