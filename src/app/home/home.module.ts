import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ListaComponent } from '../lista/lista.component';
import { TareasComponent } from '../tareas/tareas.component';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { HomePageRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
    
    
    
    ],
  declarations: [HomePage, ListaComponent, TareasComponent, AgregarTareaComponent]
})
export class HomePageModule {}
