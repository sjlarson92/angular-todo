import {Component, input, output} from '@angular/core';
import {Task} from '../../model/task.type';
import {NgClass, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [
    NgClass, UpperCasePipe
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  task = input.required<Task>()

  taskClicked = output<Task>()

  handleTaskClicked() {
    this.taskClicked.emit(this.task())
  }
}
