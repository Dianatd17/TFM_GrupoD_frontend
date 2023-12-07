import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'home' },
  { path: "home", loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'panel', canActivateChild: [authGuard], loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule) },
  { path: 'perfil', canActivateChild: [authGuard], loadChildren: () => import('./modules/logopedas/logopedas.module').then(m => m.LogopedasModule) },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
