import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IEspecialidad } from 'src/app/core/models/especialidad.interface';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  private baseUrl: string = 'http://localhost:3000/api/especialidades';
  private httpClient = inject(HttpClient);

  getAllEspecialidades(): Promise<IEspecialidad[]> {
    return lastValueFrom(this.httpClient.get<IEspecialidad[]>(this.baseUrl));
  }

  getById(id: number): Promise<IEspecialidad> {
    return lastValueFrom(this.httpClient.get<IEspecialidad>(`${this.baseUrl}/${id}`));
  }

  relateToEspecialidad(logopedaid: number, especialidadid: number): Promise<any> {
    let body = {
      logopeda_id: logopedaid
    }
    return lastValueFrom(this.httpClient.post(`${this.baseUrl}/${especialidadid}`, body));
  }

  deleteEspecialidad(logopedaid: number, especialidadid: number): Promise<any> {
    let body = {
      logopeda_id: logopedaid
    }
    return lastValueFrom(this.httpClient.delete(`${this.baseUrl}/${especialidadid}`));
  }

}
