import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-logopedas-card',
  templateUrl: './logopedas-card.component.html',
  styleUrls: ['./logopedas-card.component.css']
})
export class LogopedasCardComponent {

  miUsuario: IUser = { id: 0, nombre: "", apellidos: "", email: "", password: "", rol: 'logopeda', status: true, imagen: "" };


  @Input() miLogopeda: IUser = { id: 0, nombre: "", apellidos: "", email: "", password: "", rol: "", status: true, imagen: "" };

}
