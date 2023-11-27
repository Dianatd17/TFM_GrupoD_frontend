import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'home' },
  { path: "home", component: HomeComponent },
<<<<<<< Updated upstream
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }/*,
  { path: 'users', canActivateChild: [authGuard], loadChildren: () => import('./modules/users/user.module').then(m => m.UsuariosModule) }*/

=======
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
