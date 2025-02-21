import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListTareasComponent } from './component/list-tareas/list-tareas.component';

@Component({
  selector: 'app-root',
  imports: [ListTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tareas';
}
