import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { GeografiaComponent } from './geografia/geografia.component';
import { CronologiaComponent } from './cronologia/cronologia.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'geografia', component: GeografiaComponent },
  { path: 'cronologia', component: CronologiaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
