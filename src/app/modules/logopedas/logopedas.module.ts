import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogopedasRoutingModule } from './logopedas-routing.module';
import { ListaLogopedasComponent } from './components/lista-logopedas/lista-logopedas.component';
import { LogopedasCardComponent } from './components/logopedas-card/logopedas-card.component';


@NgModule({
  declarations: [
    ListaLogopedasComponent,
    LogopedasCardComponent
  ],
  imports: [
    CommonModule,
    LogopedasRoutingModule
  ]
})
export class LogopedasModule { }
