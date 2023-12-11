import { HttpClient } from '@angular/common/http';
import { Injectable, Input, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';

@Injectable({
  providedIn: 'root'
})
export class mapalogopedasService {
  private httpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3000/api/usuarios/logopedas';

  getAll(ruta: string): Observable<ILogopeda[]>{
    return this.httpClient.get<ILogopeda[]>(`${this.baseUrl}/${ruta}`);
    
  }


}
