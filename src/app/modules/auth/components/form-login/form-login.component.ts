import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

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

  ngOnInit(): void {
    if (localStorage.getItem('auth_token')) this.router.navigate(['/home']);
  }

  checkControl(formcontrolName: string, validator: string): boolean | undefined {
    return this.formLogin.get(formcontrolName)?.hasError(validator) && this.formLogin.get(formcontrolName)?.touched;
  }


  async onSubmit() {
    const response = await this.usuariosService.login(this.formLogin.value);
    if (response.fatal) {
      // Error en el login
      this.errorMessage = response.fatal;
    } else {
      // Login correcto
      localStorage.setItem('auth_token', response.token);
      const modal = document.querySelector<HTMLElement>(".modal");
      if (modal !== null) { 
        modal.classList.add("show");
        modal.style.display = "block";
      }
    }
  }

  redirect(): void {
    if (this.usuariosService.getRole() === "cliente") {
      this.router.navigate(['/home']);
    } else {
    this.router.navigate(['/panel']);
    }
  }

}
