import { Component, inject } from '@angular/core';
import { LogopedasService } from '../../services/logopedas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { IlogopedaHasClientes } from '../../../../core/models/logopedasHasClientes.interface';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  isLog: boolean = false;
  idLogopeda: number = 0;
  rol: string = "";
  pipe = new DatePipe('en-ES');
  miLogopeda: ILogopeda = {
    id: 0, nombre: "", apellidos: "", direccion: "", email: "", telefono: "", precio: 0, longitud: 0, latitud: 0, descripcion: "", experiencia: 0, imagen: "", infancia_o_adulto: ""
  };
  clienteContactar: IlogopedaHasClientes = { id: 0, logopeda_id: 0, cliente_id: 0, comentarios: "", puntuacion: 0, fecha_inicio: "", status: "pendiente" };

  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  logopedasServices = inject(LogopedasService);
  usuarioService = inject(UsuariosService);
  private toastrService = inject(ToastrService);
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
        } catch (error) {
          console.log(error);
        }
      }


    } catch (err) {
      console.log(err);
    }
  }

  async contactarLogopeda(idLogopeda: number) {

    const idCliente: number = this.usuarioService.getIdUsuario()

    if (idCliente !== 0) {
      let currentDate = new Date();
      this.clienteContactar.logopeda_id = this.miLogopeda.id
      this.clienteContactar.cliente_id = idCliente
      this.clienteContactar.comentarios = ""
      this.clienteContactar.puntuacion = 0
      this.clienteContactar.fecha_inicio = this.pipe.transform(currentDate, 'yyyy-MM-dd')!;

      const response = await this.logopedasServices.createContactarLogopedaHasCliente(this.clienteContactar);

      if (response) {
        this.toastrService.success('Notificación enviada', 'Contactar logopeda')
      } else {
        this.toastrService.error('No se ha podido enviar la notificación de contacto')
      }
    }

  }
}
