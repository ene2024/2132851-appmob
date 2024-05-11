import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from 'src/models/tarea';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { AgregaTareasService } from '../agrega-tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {
  message="";

  constructor(private modalCtrl: ModalController, private tareaserv: AgregaTareasService) { }

  ngOnInit() {
    this.tareaserv.getTareas;
  }
  

  tareaNueva: Tarea = {
    titulo: '',
    fechaMes: '',
    fechaAnio: '',
    descripcion: ''
  } 

  tareas: Tarea[] = []= this.tareaserv.tareas;

  async handleTareaInicial() {
    return this.tareas[0];
  }

  eliminarTarea(id: number){
    this.tareaserv.eliminarTarea(id);
  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarTareaComponent,
    });
    return await modal.present();
  }


}