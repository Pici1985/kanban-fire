import { transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';
  todo: Task[] = [
    { title: 'Buy Milk', description: 'Go to store to buy milk'},
    { title: 'Create Kanban Board', description: 'Develop a kanban App'}   
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );     
  }

  edit(list: string, task: Task) : void {
    // ures??????
  }
}
