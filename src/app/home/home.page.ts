import { Component  , Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  titulo: string = "Mi App de Tareas";

  verdadero: boolean = false;

  articulos: any = ["Libro - 40", "Computadora - 30", "Refresco -20"];



  @Output() tareaTitulo: string = 'Valor de salida';

  hazmeClic(): void {
    alert('hiciste clic!');
  }

  imagenSrc: string = 'https://i.redd.it/7ksiaa4exhh01.gif';

}