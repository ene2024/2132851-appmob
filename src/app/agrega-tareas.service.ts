import { Injectable } from '@angular/core';
import { Tarea } from 'src/models/tarea';

@Injectable({
  providedIn: 'root'
})
export class AgregaTareasService {

  constructor() { }

  tareas : Tarea[] = [];

  getTareas() {
    return this.tareas;
  }

  getTareasById(id: any) {
    return this.tareas[id];
  }

  agregarTarea(tareaNueva: Tarea){

    this.tareas.push(tareaNueva);
    //Agrega una Tarea al Arreglo
  }

  eliminarTarea(id: number){
    this.tareas.splice(id,1);
  }

}