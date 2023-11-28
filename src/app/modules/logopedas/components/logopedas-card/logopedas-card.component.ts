import { Component, Input } from '@angular/core';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';

@Component({
  selector: 'app-logopedas-card',
  templateUrl: './logopedas-card.component.html',
  styleUrls: ['./logopedas-card.component.css']
})
export class LogopedasCardComponent {



  @Input() miLogopeda: ILogopeda = {
    id: 0, nombre: "", apellidos: "", email: "", telefono: "", precio: 0, longitud: 0, latitud: 0, descripcion: "", experiencia: 0, imagen: "", infancia_o_adulto: ""
  };





  ngOnInit() {



  }

}
