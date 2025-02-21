import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Tarea, TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-edit-tarea',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent {
  tarea: Tarea = { titulo: '', descripcion: '', completado: false };

  // ✅ Asegurar que `Router` esté declarado en el constructor
  constructor(private tareaService: TareaService, public router: Router) {}

  guardarTarea() {
    this.tareaService.createTarea(this.tarea).subscribe(() => {
      this.router.navigate(['/']); // Redirige a la lista después de agregar
    });
  }
}
