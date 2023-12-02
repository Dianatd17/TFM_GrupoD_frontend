import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LogopedasComponent } from './components/logopedas/logopedas.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',  component:PanelComponent,
    children: [
      {path: 'notificaciones', component: NotificacionesComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: 'logopedas', component: LogopedasComponent},
      {path: 'perfil', component: PerfilComponent},
    ]

  },
   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
