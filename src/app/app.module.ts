import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< Updated upstream
=======
import { HttpClientModule } from '@angular/common/http';

>>>>>>> Stashed changes
import { AppComponent } from './app.component';

import { ListaLogopedasComponent } from './modules/logopedas/components/lista-logopedas/lista-logopedas.component';



import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ShareModule } from './share/share.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { MapaComponent } from './modules/mapas/components/mapa/mapa.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { EuropeComponent } from './modules/mapas/components/europe/europe.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaLogopedasComponent,

    HomeComponent,
    MapaComponent,
    EuropeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream

    ReactiveFormsModule,
    HttpClientModule,
    ShareModule,
    GoogleMapsModule
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
