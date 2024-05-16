import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './components/task.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      TaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibf-b4-todo-app';
}
