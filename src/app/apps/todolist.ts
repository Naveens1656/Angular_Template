import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './todolist.html',
})
export class TodolistComponent {
    newTask: string = '';
    tasks: { name: string }[] = [];

    constructor() {}

    addTask(): void {
        const trimmedTask = this.newTask.trim();
        if (trimmedTask) {
            this.tasks.push({ name: trimmedTask });
            this.newTask = '';
        }
    }

    deleteTask(task: { name: string }): void {
        this.tasks = this.tasks.filter(t => t !== task);
    }
}
