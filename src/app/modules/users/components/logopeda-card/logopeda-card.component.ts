import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-logopeda-card',
  templateUrl: './logopeda-card.component.html',
  styleUrls: ['./logopeda-card.component.css']
})
export class LogopedaCardComponent {
  // miUsuario: User = { _id: "", id: 0, first_name: "", last_name: "", username: "", email: "", image: "", password: "" };

  miUsuario: IUser = { id: 0, nombre: "", apellidos: "", email: "", password: "", rol: 'admin', status: true, imagen: "" };
  @Input() miLogopeda: IUser = { id: 0, nombre: "", apellidos: "", email: "", password: "", rol: 'admin', status: true, imagen: "" }



  ngOnInit() {

    this.miUsuario = this.miLogopeda

  }

}



