import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel/panel.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { LogopedasComponent } from './components/logopedas/logopedas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClientesCardComponent } from './components/clientes-card/clientes-card.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormEditPerfilComponent } from './components/form-edit-perfil/form-edit-perfil.component';
import { FormEspecialidadComponent } from './components/form-especialidad/form-especialidad.component';


@NgModule({
  declarations: [
    PanelComponent,
    ClientesComponent,
    NotificacionesComponent,
    LogopedasComponent,
    PerfilComponent,
    ClientesCardComponent,
    FormEditPerfilComponent,
    FormEspecialidadComponent

  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    ReactiveFormsModule
  ]
})
export class PanelModule { }
