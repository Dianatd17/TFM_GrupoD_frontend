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
import { ToastrModule } from 'ngx-toastr';

import { FormImageComponent } from './components/form-image/form-image.component';
import { AdminLogopedasComponent } from './components/admin-logopedas/admin-logopedas.component';
import { AdminClientesComponent } from './components/admin-clientes/admin-clientes.component';
import { ListaPendientesComponent } from './components/lista-pendientes/lista-pendientes.component';


@NgModule({
  declarations: [
    PanelComponent,
    ClientesComponent,
    NotificacionesComponent,
    LogopedasComponent,
    PerfilComponent,
    ClientesCardComponent,
    FormEditPerfilComponent,
    FormEspecialidadComponent,
    FormImageComponent,
    AdminLogopedasComponent,
    AdminClientesComponent,
    ListaPendientesComponent

  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class PanelModule { }
