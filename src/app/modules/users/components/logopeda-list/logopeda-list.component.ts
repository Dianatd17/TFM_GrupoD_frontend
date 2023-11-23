import { Component } from '@angular/core';
import { IUser } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-logopeda-list',
  templateUrl: './logopeda-list.component.html',
  styleUrls: ['./logopeda-list.component.css']
})
export class LogopedaListComponent {
  arrUsers: IUser[] = [];

}
