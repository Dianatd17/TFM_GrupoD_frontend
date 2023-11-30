import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel/panel.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { LogopedasComponent } from './components/logopedas/logopedas.component';


@NgModule({
  declarations: [
    PanelComponent,
    ClientesComponent,
    NotificacionesComponent,
    LogopedasComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
