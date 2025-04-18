import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../model/task.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(allTasks: Task[], searchTerm: string): Task[] {
    if (!searchTerm) {
      return allTasks;
    }

    const text = searchTerm.toLowerCase()
    return allTasks.filter(task => task.title.toLowerCase().includes(text))
  }

}
