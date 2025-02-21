import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TareaService, Tarea } from '../../services/tarea.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-tareas',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css']
})
export class ListTareasComponent implements OnInit {
  displayedColumns: string[] = ['titulo', 'descripcion', 'completado', 'acciones'];
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService, public router: Router) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {

    this.tareaService.getTareasAll().subscribe(data => this.tareas = data);
    console.log('entramos aqui')
    console.log(this.tareas)
  }

  eliminarTarea(id: number): void {
    this.tareaService.deleteTarea(id).subscribe(() => this.obtenerTareas());
  }

  agregarTarea() {
    this.router.navigate(['/agregar']); // Redirige a la vista de agregar tarea
  }

  toggleCompletado(tarea: Tarea): void {
    tarea.completado = !tarea.completado;
    this.tareaService.updateTarea(tarea.id!, tarea).subscribe();
  }
}