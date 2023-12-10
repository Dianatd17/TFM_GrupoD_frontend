import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { IUser } from 'src/app/core/models/user.interface';

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
type ImageResponse = { imagen: string, error: string };

type tokenDecoded = { user_id: number, user_role: string, exp_at: Date };

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string = 'http://localhost:3000/api/usuarios';
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

  updateUser(values: IUser): Promise<IUser> {
    values.id = this.getIdUsuario();
    return firstValueFrom(
      this.httpClient.put<IUser>(`${this.baseUrl}`, values)
    );
  }

  updateUserImage(fd: FormData): Observable<any> {
    return this.httpClient.post<FormData>(`${this.baseUrl}/imagen`, fd);
  }

  getUser(): Promise<IUser> {
    return firstValueFrom(
      this.httpClient.get<IUser>(`${this.baseUrl}/${this.getIdUsuario()}`)
    );
  }

  isLogged(): boolean {
    if (localStorage.getItem('auth_token')) return true;
    else return false;
  }

  getRole(): string {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const tokenDecode: tokenDecoded = jwtDecode(token!);
      return tokenDecode.user_role;
    }
    return '';
  }

  getIdUsuario(): number {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const tokenDecode: tokenDecoded = jwtDecode(token!);
      return tokenDecode.user_id;
    }
    return 0;
  }

  getRutaImagen(): Promise<ImageResponse> {
    return firstValueFrom(
      this.httpClient.get<ImageResponse>(`${this.baseUrl}/imagen/${this.getIdUsuario()}`)
    );
  }

  getAvatarCard(ruta: string | any): string {
    let defecto: string = '../../../../../assets/images/foto.png';
    if (ruta && ruta !== '') return `http://localhost:3000/img/${ruta}`;
    return defecto;
  }

  getAvatarProfile(ruta: string | any): string {
    let defecto: string = '../../../../assets/images/user.png';
    if (ruta && ruta !== '') return `http://localhost:3000/img/${ruta}`;
    return defecto;
  }

}
