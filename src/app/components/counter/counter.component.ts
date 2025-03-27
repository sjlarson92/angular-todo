import {Component, signal} from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-counter',
  imports: [
    NzButtonComponent
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  countValue = signal(0)

  increment = () => {
    this.countValue.update(val => val + 1)
  }

  decrease = () => {
    this.countValue.update(val => val - 1)
  }

  reset = () => {
    this.countValue.set(0)
  }
}
