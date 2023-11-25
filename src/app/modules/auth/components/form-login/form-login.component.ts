import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  formLogin: FormGroup;
  errorMessage: string = "";
  router = inject(Router);
  //usuariosService = inject(UsuariosService);

  constructor() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    }, []);
  }

  checkControl(formcontrolName: string, validator: string): boolean | undefined {
    return this.formLogin.get(formcontrolName)?.hasError(validator) && this.formLogin.get(formcontrolName)?.touched;
  }


  async onSubmit() {
    //TODO: descomentar cuando esté la función de login en el servicio de usuarios
    /*const response = await this.usuariosService.login(this.formLogin.value);
    if (response.fatal) {
      // Error en el login
      this.errorMessage = response.fatal;
    } else {
      // Login correcto
      localStorage.setItem('auth_token', response.token);
      // Navego a la ruta de productos
      this.router.navigate(['/home']);
    }
    console.log(response.token);*/
  }

}
