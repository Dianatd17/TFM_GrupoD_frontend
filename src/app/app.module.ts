import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/components/home/home.component';



import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ShareModule } from './share/share.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { GoogleMapsModule } from '@angular/google-maps';
import { ListaLogopedasComponent } from './modules/logopedas/components/lista-logopedas/lista-logopedas.component';
import { LogopedasCardComponent } from './modules/logopedas/components/logopedas-card/logopedas-card.component';
import { HomeFiltersComponent } from './modules/home/components/home-filters/home-filters.component';
import { PorEdadComponent } from './modules/home/components/por-edad/por-edad.component';
import { PorEspecialidadComponent } from './modules/home/components/por-especialidad/por-especialidad.component';
import { MapalogopedasComponent } from './modules/mapas/components/mapalogopedas/mapalogopedas.component';
import { ListaEspecialidadesComponent } from './modules/especialidades/components/lista-especialidades/lista-especialidades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeFiltersComponent,
    ListaLogopedasComponent,
    LogopedasCardComponent,
    PorEdadComponent,
    PorEspecialidadComponent,
    MapalogopedasComponent,
    PorEspecialidadComponent,
    ListaEspecialidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing'
    }
    )

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
