import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from 'src/models/tarea';
import { AgregaTareasService } from '../agrega-tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private tareaServ: AgregaTareasService) { }

  ngOnInit() {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  nuevaTarea: Tarea = {
    titulo: '',
    fechaMes: '',
    fechaAnio: '',
    descripcion: ''
  } 

  submit(){
    console.log("Submit form");
    this.tareaServ.agregarTarea(this.nuevaTarea); // Llama al método agregarTarea del servicio
    this.modalCtrl.dismiss();
  }

}