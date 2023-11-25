import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { provincias } from 'src/app/share/provincias';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  formRegister: FormGroup;
  errorMessage: string = "";
  router = inject(Router);
  //usuariosService = inject(UsuariosService);
  botonRol: string = "cliente";
  provincias = provincias;
  edades = ["infancia", "adulto", "ambos"];

  constructor() {
    this.formRegister = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      rol: new FormControl('cliente', [
        Validators.required
      ]),
      direccion: new FormControl('', []),
      localidad: new FormControl('', []),
      provincia: new FormControl('', []),
      telefono: new FormControl('', []),
      infancia_o_adulto: new FormControl('infancia', [])
    });
  }

  async onSubmit() {
    this.formRegister.value.rol = this.botonRol;
    /*const response = await this.usuariosService.register(this.formRegister.value);
    console.log(response);*/
    console.log(this.formRegister.value);
  }

  cambiarRol(role: string) {
    this.botonRol = role;
  }

}
