import {Component, signal} from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import {CounterComponent} from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [
    NzTableModule, CounterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = signal("I am a signal")
  oldTitle = "I am not a signal"
}
