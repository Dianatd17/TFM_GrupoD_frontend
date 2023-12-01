import { Component, Input, inject } from '@angular/core';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { LogopedasService } from '../../services/logopedas.service';


@Component({
  selector: 'app-logopedas-card',
  templateUrl: './logopedas-card.component.html',
  styleUrls: ['./logopedas-card.component.css']
})
export class LogopedasCardComponent {



  logopedasServices = inject(LogopedasService)
  usuariosService = inject(UsuariosService);

  @Input() miLogopeda: ILogopeda = {
    id: 0, nombre: "", apellidos: "", email: "", telefono: "", localidad: "", precio: 0, descripcion: "", experiencia: 0, imagen: "", puntuacion: 0
  };


  contactarLogopeda(idLogopeda: number) {
    const idCliente: number = this.usuariosService.getIdUsuario()
    if (idCliente != 0) {
      //const response = await this.logopedasServices.createContactarLogopedaHasCliente(edad);
      //  this.arrUsers = response;

    }
  }
}
