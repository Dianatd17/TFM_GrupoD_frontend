import { Component, Input } from '@angular/core';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { IUser } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-logopedas-card',
  templateUrl: './logopedas-card.component.html',
  styleUrls: ['./logopedas-card.component.css']
})
export class LogopedasCardComponent {

  datosLogopeda: any = [];
  @Input() miLogopeda: IUser = {
    id: 0, nombre: "", apellidos: "", email: "", password: "", rol: "logopeda", status: true, imagen: "", logopeda: [{ usuario_id: 0, telefono: "", precio: 0, experiencia: 0, descripcion: "", infancia_o_adulto: "" }]
  };


  Length: any;

  ngOnInit() {

    this.datosLogopeda = this.miLogopeda.logopeda;

  }

}
