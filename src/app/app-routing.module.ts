import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { EuropeComponent } from './modules/mapas/components/europe/europe.component';
import { MapaComponent } from './modules/mapas/components/mapa/mapa.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'home' },
  { path: "home", component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },/*,
  { path: 'users', canActivateChild: [authGuard], loadChildren: () => import('./modules/users/user.module').then(m => m.UsuariosModule) }*/
  { path: '', pathMatch: 'full', component: MapaComponent },
  { path: 'europa', component: EuropeComponent } //tiene que ser en home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
