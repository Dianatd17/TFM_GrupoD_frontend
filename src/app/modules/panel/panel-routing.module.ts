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
      /* Logopedas */
      {path: 'clientes', component: ClientesComponent},
      {path: 'notificaciones', component: NotificacionesComponent},
      /* Clientes */
      {path: 'logopedas', component: LogopedasComponent},
      /* Todas los usuarios */
      {path: 'perfil', component: PerfilComponent},
      /* ADMINISTRADOR */
    ]

  },
   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
