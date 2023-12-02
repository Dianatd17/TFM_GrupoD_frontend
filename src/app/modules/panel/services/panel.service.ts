import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { lastValueFrom } from 'rxjs';



type tokenDecoded = { user_id: any, user_role:string, exp_at: Date };
/* TODO EL ID ES UN STRING?? */
type user = { usedr_id: string, nombre : string, apellidos:string, email:string, password: string, longitud: number, latitud:number, direccion: string, localidad: string, provincia: string, status: any, rol: string, iamgen: string  }

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  private baseUrl:string = 'http://localhost:3000/api/usuarios'
  private userId: string = ''
  HttpClient = inject(HttpClient)

  rolUser(){
    const token = localStorage.getItem('auth_token');
    if(token){
      const decode: tokenDecoded = jwtDecode(token!)
      return decode.user_role
    }else{
      return 'No hay rol definido'
    }
  }
  
  idUser(){
    const token = localStorage.getItem('auth_token');
    if(token){
      const decode: tokenDecoded = jwtDecode(token!)
      this.userId = decode.user_id
      return decode.user_id
    }
    return 'Id desconocido'
  }

  getlogopedaById(): Promise<any>{
    return lastValueFrom(
      this.HttpClient.get<user>(`${this.baseUrl}/logopedas/${this.userId}`)
    )
  }
  
}
