import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< Updated upstream
=======
import { HttpClientModule } from '@angular/common/http';

>>>>>>> Stashed changes
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ListaLogopedasComponent } from './modules/logopedas/components/lista-logopedas/lista-logopedas.component';
import { LogopedasCardComponent } from './modules/logopedas/components/logopedas-card/logopedas-card.component';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ShareModule } from './share/share.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaLogopedasComponent,
    LogopedasCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream

    ReactiveFormsModule,
    HttpClientModule,
    ShareModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

=======
    ReactiveFormsModule,
    HttpClientModule,
>>>>>>> Stashed changes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
