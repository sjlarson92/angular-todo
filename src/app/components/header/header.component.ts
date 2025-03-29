import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink, NzButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = signal('Angular App')
}
