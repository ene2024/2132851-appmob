import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tarea } from 'src/tarea.model';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent {
  myForm!: FormGroup;

  constructor(private router: Router) { 
    this.router.navigate(['/home-module']);

  }
  @Output() tareaAdded = new EventEmitter<tarea>();
  
  title: string = '';
  date: Date = new Date();

  

  addTarea() {
    this.tareaAdded.emit({ title: this.title, date: this.date });
    this.title = ''; 
    this.date = new Date(); 
  }

}
