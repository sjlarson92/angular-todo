import {Component, signal} from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import {NgForOf} from '@angular/common';
import {TasksTableComponent} from '../components/tasks-table/tasks-table.component';
import {CounterComponent} from '../components/counter/counter.component';

export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-home',
  imports: [
    NzTableModule, NgForOf, TasksTableComponent, CounterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal("I am being passed to child component")
  title = signal("I am a signal")
  oldTitle = "I am not a signal"
}
