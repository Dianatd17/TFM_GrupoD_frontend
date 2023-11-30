import { Component, inject } from '@angular/core';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  botonEdad: string = "ambos";
  usuariosService = inject(UsuariosService);


  cambiarSeleccion(edad: string) {
    this.botonEdad = "ambos";
    if (edad == "infancia" || edad == "adulto") {
      this.botonEdad = edad;
    }


  }
}
