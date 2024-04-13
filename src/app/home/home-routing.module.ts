import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  {
    path: 'AgregarTareaComponent',
    component: AgregarTareaComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
