import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LogopedaListComponent } from './components/logopeda-list/logopeda-list.component';
import { LogopedaCardComponent } from './components/logopeda-card/logopeda-card.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    LogopedaListComponent,
    LogopedaCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule

  ]
})
export class UsuariosModule { }
