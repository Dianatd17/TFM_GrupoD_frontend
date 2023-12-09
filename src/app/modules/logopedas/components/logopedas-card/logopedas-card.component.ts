import { Component, Input, inject } from '@angular/core';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { LogopedasService } from '../../services/logopedas.service';
import { IlogopedaHasClientes } from 'src/app/core/models/logopedasHasClientes.interface';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-logopedas-card',
  templateUrl: './logopedas-card.component.html',
  styleUrls: ['./logopedas-card.component.css']
})
export class LogopedasCardComponent {
  clienteContactar: IlogopedaHasClientes = { id: 0, logopeda_id: 0, cliente_id: 0, comentarios: "", puntuacion: 0, fecha_inicio: "", status: "pendiente" };
  pipe = new DatePipe('en-ES');
  rol: string = "";

  private toastrService = inject(ToastrService);
  logopedasServices = inject(LogopedasService)
  usuariosService = inject(UsuariosService);

  @Input() miLogopeda: ILogopeda = {
    id: 0, nombre: "", apellidos: "", direccion: "", email: "", telefono: "", precio: 0, longitud: 0, latitud: 0, descripcion: "", experiencia: 0, imagen: "", infancia_o_adulto: ""
  };

  ngOnInit() {


    //Verificamos que hay una imagen, si no mostramos el archivo que tenemos en imagenes
    let imageTmp: string = this.miLogopeda.imagen!;
    if (this.urlImgValidator(imageTmp) === true) {
      this.miLogopeda.imagen = imageTmp;
    } else {
      this.miLogopeda.imagen = '../../../../../assets/images/foto.png'
    }
    this.rol = this.usuariosService.getRole()

  }

  async contactarLogopeda(idLogopeda: number) {

    const idCliente: number = this.usuariosService.getIdUsuario()

    if (idCliente !== 0) {
      let currentDate = new Date();
      this.clienteContactar.logopeda_id = idLogopeda
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

  urlImgValidator(image: string): any {

    const rutaImagen = image
    const expUrl = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/
    const expImg = /.*(png|jpg|jpeg|gif)$/


    //primero validamos si es una URL
    if (expUrl.test(rutaImagen)) {
      //validamos que sea una imagen
      return (!expImg.test(rutaImagen)) ? { 'urlimgvalidator': true } : false

    } else {
      return { 'urlimgvalidator': false }
    }

  }

}
