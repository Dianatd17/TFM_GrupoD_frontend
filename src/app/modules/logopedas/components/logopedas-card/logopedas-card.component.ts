import { Component, Input, inject } from '@angular/core';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { LogopedasService } from '../../services/logopedas.service';
import { IlogopedaHasClientes } from 'src/app/core/models/logopedasHasClientes.interface';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-logopedas-card',
  templateUrl: './logopedas-card.component.html',
  styleUrls: ['./logopedas-card.component.css']
})
export class LogopedasCardComponent {
  clienteContactar: IlogopedaHasClientes = { id: 0, logopeda_id: 0, cliente_id: 0, comentarios: "", puntuacion: 0, fecha_inicio: "", status: "pendiente" };
  pipe = new DatePipe('es-US');

  logopedasServices = inject(LogopedasService)
  usuariosService = inject(UsuariosService);

  @Input() miLogopeda: ILogopeda = {
    id: 0, nombre: "", apellidos: "",direccion:"", email: "", telefono: "", precio: 0, longitud: 0, latitud: 0, descripcion: "", experiencia: 0, imagen: "", infancia_o_adulto: ""
  };


  async contactarLogopeda(idLogopeda: number) {
    debugger;
    const idCliente: number = this.usuariosService.getIdUsuario()
    console.log(idCliente)
    if (idCliente !== 0) {

      //   this.clienteContactar.logopeda_id = idLogopeda
      //  this.clienteContactar.cliente_id = idCliente
      //   this.clienteContactar.comentarios = ""
      // this.clienteContactar.puntuacion = 0
      //this.clienteContactar.fecha_inicio = this.pipe.transform(Date.now(), 'yyyy-MM-dd')!;

      //console.log(this.clienteContactar)
      // const response = await this.logopedasServices.createContactarLogopedaHasCliente(this.clienteContactar);
      // console.log(response)
      //if (response.id) {
      // console.log('Se ha enviado la notificación a:' + this.miLogopeda.nombre + ' ' + this.miLogopeda.apellidos)
      // }
    }
  }
}
