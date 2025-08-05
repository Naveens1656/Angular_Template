import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './scrumboard.html',
})
export class ScrumboardComponent {
    boards: any[] = [
        { name: 'To Do', tasks: [] },
        { name: 'In Progress', tasks: [] },
        { name: 'Done', tasks: [] },
    ]; 

    addTask(board: any, taskName: string) {
        if (taskName.trim()) {
            board.tasks.push({ name: taskName.trim(), created: new Date() });
        }
    }

    deleteTask(board: any, task: any) {
        board.tasks = board.tasks.filter((t: any) => t !== task);

    }
}
