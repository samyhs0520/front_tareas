import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListTareasComponent } from './component/list-tareas/list-tareas.component';
import { EditTareaComponent } from './component/edit-tarea/edit-tarea.component';

export const routes: Routes = [
    {path: '', component:ListTareasComponent},
    {path: 'agregar', component:EditTareaComponent}
];
