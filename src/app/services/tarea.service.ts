import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tarea{
  id?: number;
  titulo:string;
  descripcion? : string;
  completado:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private apiUrl = 'http://localhost:8080/api/tareas';

  constructor(private http: HttpClient) { }
  //listar todos
  getTareasAll(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.apiUrl);
  }
  //listar uno solo
  getTareadId(id:number): Observable<Tarea>{
    return this.http.get<Tarea>(`${this.apiUrl}/${id}`);
  }
  
  //crear tarea
  createTarea(tarea:Tarea): Observable<Tarea>{
    return this.http.post<Tarea>(this.apiUrl,tarea);
  }
  //actualizar  tarea
  updateTarea(id:number, tarea:Tarea): Observable<Tarea>{
    return this.http.put<Tarea>(`${this.apiUrl}/${id}`,tarea);
  }
  //borrar tarea

  deleteTarea(id:number): Observable<Tarea>{
    return this.http.delete<Tarea>(`${this.apiUrl}/${id}`);
  }
  
}
