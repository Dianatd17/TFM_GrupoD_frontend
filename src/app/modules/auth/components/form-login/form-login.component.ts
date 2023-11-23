import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  formLogin: FormGroup;
  errorMessage: string = "";
  router = inject(Router);
  usuariosService = inject(UsuariosService);

  constructor() {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
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
