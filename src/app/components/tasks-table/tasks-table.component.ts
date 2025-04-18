import {Component, inject, input, OnInit, signal} from '@angular/core';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {TasksService} from '../../services/tasks.service';
import {Task} from '../../model/task.type';
import {catchError} from 'rxjs';
import {TaskItemComponent} from '../task-item/task-item.component';
import {FormsModule} from '@angular/forms';
import {FilterTodosPipe} from '../../pipes/filter-todos.pipe';

@Component({
  selector: 'app-tasks-table',
  imports: [NzButtonModule, TaskItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.css'
})

// implements OnInit allows a method to run on init
export class TasksTableComponent implements OnInit {
  // inject TaskService to this component
  taskService = inject(TasksService)

  taskItems = signal<Array<Task>>([])
  searchTerm = signal('')

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

  updateTask(task: Task) {
    this.taskItems.update((currentTasks) => {
      return currentTasks.map(currentTask => {
        if (currentTask.id === task.id) {
          return {
            ...currentTask,
            completed: !currentTask.completed,
          }
        } else {
          return currentTask
        }
      })
    })
  }

  message = input("Default message") // this should receive prop
  keyUpHandler = (event: KeyboardEvent) => {
    console.log(`user pressed ${event.key}`)
  }
}
