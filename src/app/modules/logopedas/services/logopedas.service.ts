import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { IlogopedaHasClientes } from 'src/app/core/models/logopedasHasClientes.interface';


@Injectable({
  providedIn: 'root'
})
export class LogopedasService {

  //"https://jsonblob.com/api/jsonBlob/1177751215915524096"
  // private baseUrl: string = "http://localhost:3000/api/public";
  private baseUrl: string = "http://localhost:3000/api/";

  //http://localhost:3000/api/usuarios/logopedas/edad/
  httpClient = inject(HttpClient);
  constructor() { }


  getTop20(): Promise<ILogopeda[]> {
    const userPublic: string = this.baseUrl + "public"
    return lastValueFrom(this.httpClient.get<ILogopeda[]>(userPublic))
  }


  getLogopedaByEdad(edad: string): Promise<ILogopeda[]> {
    const logopedasEdad: string = this.baseUrl + "usuarios/logopedas/"

    return lastValueFrom(this.httpClient.get<ILogopeda[]>(`${logopedasEdad}${edad}`))


  }

  createContactarLogopedaHasCliente(logHasCliente: IlogopedaHasClientes) {
    const logopedasEdad: string = this.baseUrl + "usuarios/conectar/"
    return firstValueFrom(this.httpClient.post<IlogopedaHasClientes>(logopedasEdad, logHasCliente))

  }


}
