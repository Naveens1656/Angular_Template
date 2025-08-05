import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './chat.html',
})
export class ChatComponent implements OnInit {
    currentUser = 'You';
    chatUsers: any[] = []; // ✅ All dummy users removed
    selectedUser: any = null;
    messages: any[] = []; // ✅ Dummy chat messages removed
    newMessage = '';

    ngOnInit() {}

    selectUser(user: any) {
        this.selectedUser = user;
        this.messages = [];
    }

    sendMessage() {
        if (this.newMessage.trim()) {
            this.messages.push({
                sender: this.currentUser,
                content: this.newMessage.trim(),
                timestamp: new Date(),
            });
            this.newMessage = '';
        }
    }
}
