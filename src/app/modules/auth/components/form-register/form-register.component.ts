import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { provincias } from 'src/app/share/provincias';
import { UsuariosService } from '../../services/usuarios.service';

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
      repitepassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      rol: new FormControl('cliente', [
        Validators.required
      ]),
      direccion: new FormControl('', []),
      localidad: new FormControl('', []),
      provincia: new FormControl('', []),
      telefono: new FormControl('', [
        Validators.pattern(/^(?:(?:\+?[0-9]{2,6})?[ ]?[6789][0-9 -]{8,13})$/)
      ]),
      infancia_o_adulto: new FormControl('infancia', [])
    }, [this.checkPassword]);
  }

  //TODO: si hay token debería de reenviar a home, descomentar cuando esté bien
  ngOnInit(): void {
    if (localStorage.getItem('auth_token')) this.router.navigate(['/home']);
  }

  async onSubmit() {
    this.formRegister.value.rol = this.botonRol;
    this.errorMessage = '';
    this.formRegister.value.status = this.botonRol === 'cliente' ? 1 : 0;
    if (this.botonRol === 'cliente' || this.formRegister.value.telefono !== '') {
      //TODO: deberíamos consultar si el email ya existe en la bbdd antes de mandar nada
      const response = await this.usuariosService.register(this.formRegister.value);
      if (!response.id) {
        this.errorMessage = "El usuario no pudo crearse: " + response.fatal;
      } else {
        const modal = document.querySelector<HTMLElement>(".modal");
        if (modal !== null) { 
          modal.classList.add("show");
          modal.style.display = "block";
        }
      }
    } else
      this.errorMessage = "Los campos teléfono y clientela son requeridos para logopedas";
  }

  redirect(): void {
      this.router.navigate(['/auth/login']);
  }

  cambiarRol(role: string) {
    this.botonRol = role;
  }

  checkControl(formcontrolName: string, validator: string): boolean | undefined {
    return this.formRegister.get(formcontrolName)?.hasError(validator) && this.formRegister.get(formcontrolName)?.touched;
  }

  checkPassword(formValue: AbstractControl) {
    const password = formValue.get('password')?.value;
    const repeatPassword = formValue.get('repitepassword')?.value;
    if (password !== repeatPassword) return {'checkpassword': true};
    else return null;
  }

}
