import {inject, Injectable} from '@angular/core';
import {Task} from '../model/task.type';
import {HttpClient} from '@angular/common/http';
// By saying this service is providedIn root this can be used by any component
// If we provide the service to a specific component then it can only be used there

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  http = inject(HttpClient)

  getTasksFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Array<Task>>(url)
  }

  constructor() {
  }
}
