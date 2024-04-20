import { Component, Input, OnInit } from '@angular/core';
import { tarea } from 'src/tarea.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor() { }
  
  ngOnInit() {}
  @Input() tareas: tarea[] = [];

  onTareaAdded(tareaData: { title: string, date: Date }) {
    const newTarea = new tarea(tareaData.title, tareaData.date);
    this.tareas.push(newTarea);
  }
}
