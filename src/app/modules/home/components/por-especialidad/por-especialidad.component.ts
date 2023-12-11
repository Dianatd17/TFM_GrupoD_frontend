import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEspecialidad } from 'src/app/core/models/especialidad.interface';
import { EspecialidadesService } from 'src/app/modules/especialidades/services/especialidades.service';
import { MapalogopedasComponent } from 'src/app/modules/mapas/components/mapalogopedas/mapalogopedas.component';

@Component({
  selector: 'app-por-especialidad',
  templateUrl: './por-especialidad.component.html',
  styleUrls: ['./por-especialidad.component.css']
})
export class PorEspecialidadComponent {

  especialidadesService = inject(EspecialidadesService);
  especialidad: string="";
  descripcion: string="";
  es_infancia: number = 1;
  esp_id: string = "";
  httpClient = inject(HttpClient);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  @ViewChild(MapalogopedasComponent) mapaComponent: MapalogopedasComponent | undefined;

  async ngAfterViewInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      
      try {
        let id = Number(params.especialidadId);
        let result = await this.especialidadesService.getById(id);
        this.esp_id = `especialidad/${id}`;
        console.log("estoy en por-especialidad")
        console.log(this.esp_id);
        this.especialidad = result.especialidad;
        this.descripcion = result.descripcion;
        this.es_infancia = result.es_infancia;

        this.inicializarMapa();
      } catch(error) {
        console.log(error);
        this.especialidad = "No existe esta especialidad"
      }
    })
  }

  private inicializarMapa() {
    // Aseguramos que esp_id tenga un valor antes de llamar al componente hijo
    if (this.mapaComponent && this.esp_id) {
      this.mapaComponent.actualizarRuta(this.esp_id);
    }
  }
  
}
