import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../auth/services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { LogopedasService } from '../services/logopedas.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  rol: string = "";
  isLog: boolean = false;
  idLogopeda: number = 0;
  miLogopeda: ILogopeda = {
    id: 0, nombre: "", apellidos: "", direccion: "", email: "", telefono: "", precio: 0, longitud: 0, latitud: 0, descripcion: "", experiencia: 0, imagen: "", infancia_o_adulto: ""
  };

  activeRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  logopedasServices = inject(LogopedasService)
  router = inject(Router);

  ngOnInit() {

    this.rol = this.usuariosService.getRole();
    this.isLog = this.usuariosService.isLogged();

    if (!this.isLog) {
      this.router.navigate(['/home']);
    }

    this.activeRoute.params.subscribe((dato) => {
      console.log('probando:--- ' + dato['id'])
      console.log('probando: *****' + this.activeRoute.snapshot.data)
      this.idLogopeda = dato['id'];
      // console.log(this.idLogopeda)
      this.getLogopedasId(this.idLogopeda);
    })


  }

  async getLogopedasId(id: number) {
    try {
      const response = await this.logopedasServices.getLogopedaById(id);

      if (response) {
        this.miLogopeda = response;
      }


    } catch (err) {
      console.log(err);
    }
  }
}
