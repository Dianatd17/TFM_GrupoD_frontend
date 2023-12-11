import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IUser } from 'src/app/core/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl:string = 'http://localhost:3000/api/usuarios/clientes'
  private httpClient = inject(HttpClient);

  getAllClientes():Promise<IUser[]>{
    return firstValueFrom(
      this.httpClient.get<IUser[]>(this.baseUrl)
    )
  }
}
