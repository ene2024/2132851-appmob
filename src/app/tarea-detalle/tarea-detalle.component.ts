import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AgregaTareasService } from '../agrega-tareas.service';
@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.component.html',
  styleUrls: ['./tarea-detalle.component.scss'],
})
export class TareaDetalleComponent  implements OnInit {

  constructor(private ruta : ActivatedRoute, private consulta : AgregaTareasService) { }

  ngOnInit() {
    
  }

  idTarea: string = this.ruta.snapshot.params['id'];


  tarea = this.consulta.getTareasById(this.idTarea);

  imgurl="https://i.pinimg.com/736x/9c/ca/f1/9ccaf1624bee138117b56c1291657c98.jpg";
}