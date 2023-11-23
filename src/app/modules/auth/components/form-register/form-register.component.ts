import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  formRegister: FormGroup;
  errorMessage: string = "";
  router = inject(Router);
  usuariosService = inject(UsuariosService);
  botonRol: string = "cliente";

  constructor() {
    this.formRegister = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      rol: new FormControl(this.botonRol),
      direccion: new FormControl(),
      localidad: new FormControl(),
      provincia: new FormControl(),
      telefono: new FormControl(),
      infancia_o_adulto: new FormControl()
    });
  }

  async onSubmit() {
    /*const response = await this.usuariosService.register(this.formRegister.value);
    console.log(response);*/
    console.log(this.formRegister.value);
  }

  cambiarRol(rol: string) {
    this.formRegister.value.rol = rol;
    this.botonRol = rol;
  }

}
