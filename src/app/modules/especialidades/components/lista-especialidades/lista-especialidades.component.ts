import { Component, inject } from '@angular/core';
import { EspecialidadesService } from '../../services/especialidades.service';
import { IEspecialidad } from 'src/app/core/models/especialidad.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-especialidades',
  templateUrl: './lista-especialidades.component.html',
  styleUrls: ['./lista-especialidades.component.css']
})
export class ListaEspecialidadesComponent {

  especialidadesService = inject(EspecialidadesService);
  listado: IEspecialidad[] | any = [];
  httpClient = inject(HttpClient);

  async ngOnInit(): Promise<void> {
    try {
      this.listado = await this.especialidadesService.getAllEspecialidades();
    } catch(error) {
      console.log(error);
    }
  }

}
