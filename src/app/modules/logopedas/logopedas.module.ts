import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogopedasRoutingModule } from './logopedas-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { InformacionComponent } from './components/informacion/informacion.component';




@NgModule({
  declarations: [


    PerfilComponent,
    ComentariosComponent,
    InformacionComponent

  ],
  imports: [
    CommonModule,
    LogopedasRoutingModule
  ]
})
export class LogopedasModule { }
