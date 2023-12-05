import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel/panel.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { LogopedasComponent } from './components/logopedas/logopedas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PanelComponent,
    ClientesComponent,
    NotificacionesComponent,
    LogopedasComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    ReactiveFormsModule
  ]
})
export class PanelModule { }
