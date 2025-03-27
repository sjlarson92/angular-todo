import {Component, input} from '@angular/core';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NgForOf} from '@angular/common';
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTbodyComponent,
  NzTdAddOnComponent, NzTheadComponent,
  NzThMeasureDirective, NzTrDirective
} from 'ng-zorro-antd/table';
import {Task} from '../../home/home.component';

@Component({
  selector: 'app-tasks-table',
  imports: [NzButtonModule, NgForOf, NzTableCellDirective, NzTableComponent, NzTbodyComponent, NzTdAddOnComponent, NzThMeasureDirective, NzTheadComponent, NzTrDirective],
  templateUrl: './tasks-table.component.html',
  styleUrl: './tasks-table.component.css'
})
export class TasksTableComponent {
  listOfData: Task[] = [
    {
      id: 1,
      name: 'Laundry',
      isCompleted: true
    },
    {
      id: 2,
      name: 'Take out trash',
      isCompleted: false
    },
    {
      id: 3,
      name: 'Dishes',
      isCompleted: false
    },
    {
      id: 4,
      name: 'Vacuum',
      isCompleted: false
    }
  ]
  message = input("Default message") // this should receive prop
  keyUpHandler = (event: KeyboardEvent) => {
    console.log(`user pressed ${event.key}`)
  }
}
