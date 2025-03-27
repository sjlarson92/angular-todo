import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";

// Component decorator that enhances class
@Component({
  selector: 'app-root', // tag for this component that is in index.html
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html', // what is rendered in the view
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-todo';
}
