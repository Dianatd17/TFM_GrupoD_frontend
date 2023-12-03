import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { EuropeComponent } from './modules/mapas/components/europe/europe.component';
import { MapaComponent } from './modules/mapas/components/mapa/mapa.component';
import { MapalogopedasComponent } from './modules/mapas/components/mapalogopedas/mapalogopedas.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'home' },
  { path: "home", loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'panel', loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule) },
  { path: '**', redirectTo: 'home' },
  { path: '', pathMatch: 'full', component: MapaComponent },
  { path: 'europa', component: EuropeComponent },
  { path: 'mapalogopedas', component: MapalogopedasComponent } //tiene que ser en home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
