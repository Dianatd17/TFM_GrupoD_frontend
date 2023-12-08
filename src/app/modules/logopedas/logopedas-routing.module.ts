import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { InformacionComponent } from './components/informacion/informacion.component';

const routes: Routes = [
  {
    path: ':id', component: PerfilComponent,
    children: [
      { path: 'comentarios/:id', component: ComentariosComponent },
      { path: 'informacion/:id', component: InformacionComponent }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogopedasRoutingModule { }
