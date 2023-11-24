import { Component } from '@angular/core';
import { IUser } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-lista-logopedas',
  templateUrl: './lista-logopedas.component.html',
  styleUrls: ['./lista-logopedas.component.css']
})
export class ListaLogopedasComponent {
  arrUsers: IUser[] = [];

}
