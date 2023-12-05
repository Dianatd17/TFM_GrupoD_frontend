import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { IlogopedaHasClientes } from 'src/app/core/models/logopedasHasClientes.interface';


@Injectable({
  providedIn: 'root'
})
export class LogopedasService {

  private baseUrl: string = "http://localhost:3000/api/";
  httpClient = inject(HttpClient);
  constructor() { }


  getTop20(): Promise<ILogopeda[]> {
    const userPublic: string = this.baseUrl + "public"
    return lastValueFrom(this.httpClient.get<ILogopeda[]>(userPublic))
  }


  getLogopedaByEdad(edad: string): Promise<ILogopeda[]> {
    // TODO: cambiarlo y descomentar cuando esté la ruta
    const logopedasEdad: string = this.baseUrl + "usuarios/logopedas/"
    return lastValueFrom(this.httpClient.get<ILogopeda[]>(`${logopedasEdad}${edad}`))
  }

  getLogopedaByEspecialidad(id: number): Promise<ILogopeda[]> {
    // TODO: cambiarlo y descomentar cuando esté la ruta
    const logopedasEspecialidad: string = this.baseUrl + "usuarios/logopedas/especialidad";
    return lastValueFrom(this.httpClient.get<ILogopeda[]>(`${logopedasEspecialidad}/${id}`));
  }

  createContactarLogopedaHasCliente(logHasCliente: IlogopedaHasClientes) {
    const logopedasEdad: string = this.baseUrl + "usuarios/logopedas/conectar/"
    return firstValueFrom(this.httpClient.post<IlogopedaHasClientes>(logopedasEdad, logHasCliente))

  }


}
