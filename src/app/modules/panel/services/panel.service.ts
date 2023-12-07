import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { lastValueFrom } from 'rxjs';
import { clase } from '../interfaces/panel.interfaces';



type tokenDecoded = { user_id: any, user_role:string, exp_at: Date };

type user = {
  id: number,
  nombre: string,
  apellidos: string,
  email: string,
  password: string,
  longitud: string,
  latitud:string,
  direccion: string,
  localidad: string,
  provincia: string,
  status: number,
  rol: string,
  imagen: any
}
type cliente = {
    logopeda_id: number,
    cliente_id: number,
    nombre: string,
    apellidos: string,
    imagen: any,
    fecha_inicio: Date,
    rol: string,
    estado_u: number,
    status: string,
    email: string,
    localidad:string
}


@Injectable({
  providedIn: 'root'
})
export class PanelService {
  private baseUrl:string = 'http://localhost:3000/api' //! cuidado con el /usuarios 
 
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

  /* Recupera los datos del user segun el id para poner su nombre e imagen */
  getUser(): Promise<any>{
    const token = localStorage.getItem('auth_token');
    const decode: tokenDecoded = jwtDecode(token!);
    return lastValueFrom(
      this.HttpClient.get<any>(`${this.baseUrl}/usuarios/${decode.user_id}`)
      )
  }

  /* Recupera todos lo clientes de este logopeda por su id  */  
  getClientesByLogopeda():Promise<cliente[]>{
    const token = localStorage.getItem('auth_token');
    const decode: tokenDecoded = jwtDecode(token!);
    return lastValueFrom(
      this.HttpClient.get<cliente[]>(`${this.baseUrl}/usuarios/logopedas/clientes/${decode.user_id}`)
    )
  }

  getLgopedasByClientes():Promise<any[]>{
    const token = localStorage.getItem('auth_token');
    const decode: tokenDecoded = jwtDecode(token!);
    return lastValueFrom(
      this.HttpClient.get<any[]>(`${this.baseUrl}/usuarios/clientes/bylogopeda/${decode.user_id}`)
    )
  }

  getClaseById(id:string):Promise<clase>{
    
    return lastValueFrom(
      this.HttpClient.get<clase>(`${this.baseUrl}/usuarios/logopedas/clase/${id}`)
    )
  }

  updateStatus(id:string, body:any){
    return lastValueFrom(
      this.HttpClient.put<any>(`${this.baseUrl}/usuarios/logopedas/clase/${id}`, body)
    )
  }
  

  
}
