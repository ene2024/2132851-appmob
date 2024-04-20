import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { tarea } from 'src/tarea.model';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { TareasComponent } from '../tareas/tareas.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("AppComponent: Constructor");
  }


  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }

  tareas: tarea[] = [];

  onTareaAdded(tarea: tarea) {
    this.tareas.push(tarea);
  }
}
