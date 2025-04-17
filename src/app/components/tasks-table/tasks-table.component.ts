import {Component, inject, input, OnInit, signal} from '@angular/core';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {TasksService} from '../../services/tasks.service';
import { Task } from '../../model/task.type';
import {catchError} from 'rxjs';
import {TaskItemComponent} from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks-table',
  imports: [NzButtonModule, TaskItemComponent],
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.css'
})

// implements OnInit allows a method to run on init
export class TasksTableComponent implements OnInit{
  // inject TaskService to this component
  taskService = inject(TasksService)

  taskItems = signal<Array<Task>>([])

  ngOnInit() {
    // make api call to get tasks and set tasks to signal in component
    this.taskService
      .getTasksFromApi()
      .pipe(
        catchError((error) => {
          console.log(`Fetching todos had error: ${error}`)
          throw error
        })
    ).subscribe((tasks) => {
      this.taskItems.set(tasks)
      }
    )
  }

  message = input("Default message") // this should receive prop
  keyUpHandler = (event: KeyboardEvent) => {
    console.log(`user pressed ${event.key}`)
  }
}
