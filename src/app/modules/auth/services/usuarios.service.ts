import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
 import { jwtDecode } from 'jwt-decode';
 
type FormRegisterValue = {
  nombre: string, apellidos: string, email: string,
  password: string, repitepassword: string, rol: string,
  direccion: string, localidad: string, provincia: string,
  telefono: string, infancia_o_adulto: string
};
type FormRegisterResponse = {
  id: number, nombre: string, apellidos: string, 
  email: string, password: string, rol: string,
  direccion: string, localidad: string, provincia: string,
  telefono: string, infancia_o_adulto: string, fatal: string
};
type FormLoginValue = { email: string, password: string };
type FormLoginResponse = { success: string, token: string, fatal: string };

type tokenDecoded = { user_id: number, user_role:string, exp_at: Date };

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //TODO: borrar esto y descomentar el baseUrl real cuando esté listo en el back
  private baseUrl: string = "https://logopedas.free.beeceptor.com/api/usuarios";
  //private baseUrl: string = 'http://localhost:3000/api/usuarios';
  private httpClient = inject(HttpClient);

  register(values: FormRegisterValue): Promise<FormRegisterResponse> {
    return firstValueFrom(
      this.httpClient.post<FormRegisterResponse>(`${this.baseUrl}/register`, values)
    );
  }

  login(values: FormLoginValue): Promise<FormLoginResponse> {
    return firstValueFrom(
      this.httpClient.post<FormLoginResponse>(`${this.baseUrl}/login`, values)
    );
  }

  isLogged(): boolean {
    if (localStorage.getItem('auth_token')) return true;
    else return false;
  }

  getRole(): string {
    //TODO: no borrar código! descomentar y quitar el return cuando esté la ruta hecha
    /*const token = localStorage.getItem('auth_token');
    if(token) {
      const tokenDecode: tokenDecoded = jwtDecode(token!);
      return tokenDecode.user_role;
    }
    return '';*/
    return 'cliente'; // usar 'cliente', 'logopeda', 'admin', o '' si no está loggeado
  }

}