import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  botonEdad: string = "ambos";


  cambiarSeleccion(edad: string) {
    this.botonEdad = "ambos";
    if (edad == "infancia" || edad == "adulto") {
      this.botonEdad = edad;
    }


  }
}
