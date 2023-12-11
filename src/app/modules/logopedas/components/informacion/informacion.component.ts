import { Component, inject } from '@angular/core';
import { LogopedasService } from '../../services/logopedas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { IlogopedaHasClientes } from '../../../../core/models/logopedasHasClientes.interface';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  isLog: boolean = false;
  idLogopeda: number = 0;
  rol: string = "";
  miLogopeda: ILogopeda = {
    id: 0, nombre: "", apellidos: "", direccion: "", email: "", telefono: "", precio: 0, longitud: 0, latitud: 0, descripcion: "", experiencia: 0, imagen: "", infancia_o_adulto: ""
  };

  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  logopedasServices = inject(LogopedasService);
  usuarioService = inject(UsuariosService);
  conexion: IlogopedaHasClientes[] = [];


  async ngOnInit() {

    this.isLog = this.usuarioService.isLogged();

    if (!this.isLog) {
      this.router.navigate(['/home']);
    }

    this.rol = this.usuarioService.getRole();

    this.activeRoute.params.subscribe((params) => {
      this.getLogopedasId(params['id']);

    })

  }



  async getLogopedasId(id: number) {
    try {
      const response = await this.logopedasServices.getLogopedaById(id);

      if (response) {
        this.miLogopeda = response;
        try {
          this.conexion = await this.logopedasServices.getConexion(this.miLogopeda.id, this.usuarioService.getIdUsuario());
          console.log(this.conexion);
        } catch (error) {
          console.log(error);
        }
      }


    } catch (err) {
      console.log(err);
    }
  }

  async getConexion() {
    
  }

}
