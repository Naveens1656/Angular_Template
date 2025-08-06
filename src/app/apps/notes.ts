import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './notes.html',
})
export class NotesComponent {
    notes: any[] = []; // ✅ Dummy notes removed
    newNote: string = '';

    addNote() {
        if (this.newNote.trim()) {
            this.notes.unshift({
                text: this.newNote.trim(),
                created: new Date()
            });
            this.newNote = '';
        }
    }

    deleteNote(note: any) {
        this.notes = this.notes.filter(n => n !== note);
    }
}
