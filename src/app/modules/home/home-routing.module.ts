import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PorEspecialidadComponent } from './components/por-especialidad/por-especialidad.component';
import { PorEdadComponent } from './components/por-edad/por-edad.component';
import { authGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'especialidad/:especialidadId', canActivate: [authGuard], component: PorEspecialidadComponent },
  { path: ':edad', canActivate: [authGuard], component: PorEdadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
