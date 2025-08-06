import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './mailbox.html',
})
export class MailboxComponent implements OnInit {
    mailboxList: any[] = []; // ✅ All dummy email data removed
    selectedMail: any = null;
    filter = '';

    ngOnInit() {}

    viewMail(mail: any) {
        this.selectedMail = mail;
    }

    deleteMail(mail: any) {
        this.mailboxList = this.mailboxList.filter(m => m !== mail);
    }
}
