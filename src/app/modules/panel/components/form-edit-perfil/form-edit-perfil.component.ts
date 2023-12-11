import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/core/models/user.interface';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { provincias } from 'src/app/share/provincias';

@Component({
  selector: 'app-form-edit-perfil',
  templateUrl: './form-edit-perfil.component.html',
  styleUrls: ['./form-edit-perfil.component.css']
})
export class FormEditPerfilComponent {

  formEdit: FormGroup;
  user: IUser | any;
  errorMessage: string = "";
  router = inject(Router);
  usuariosService = inject(UsuariosService);
  toastrService = inject(ToastrService);
  provincias = provincias;
  edades = ["infancia", "adulto", "ambos"];

  ngOnInit() {
    this.usuariosService.getUser()
      .then((obj) => {
        this.formEdit = new FormGroup({
          nombre: new FormControl(obj.nombre, [
            Validators.required
          ]),
          apellidos: new FormControl(obj.apellidos, [
            Validators.required
          ]),
          email: new FormControl(obj.email, [
            Validators.required,
            Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
          ]),
          password: new FormControl('', [
            Validators.minLength(8)
          ]),
          repitepassword: new FormControl('', [
            Validators.minLength(8)
          ]),
          rol: new FormControl(this.usuariosService.getRole(), [
            Validators.required
          ]),
          direccion: new FormControl(obj.direccion, []),
          localidad: new FormControl(obj.localidad, []),
          provincia: new FormControl(obj.provincia, []),
          telefono: new FormControl(obj.telefono, [
            Validators.pattern(/^(?:(?:\+?[0-9]{2,6})?[ ]?[6789][0-9 -]{8,13})$/)
          ]),
          descripcion: new FormControl(obj.descripcion, []),
          precio: new FormControl(obj.precio, []),
          experiencia: new FormControl(obj.experiencia, []),
          infancia_o_adulto: new FormControl(obj.infancia_o_adulto, [])
        }, [this.checkPassword]);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  constructor() {
    this.formEdit = new FormGroup({
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
      rol: new FormControl(this.usuariosService.getRole(), [
        Validators.required
      ]),
      direccion: new FormControl('', []),
      localidad: new FormControl('', []),
      provincia: new FormControl('', []),
      telefono: new FormControl('', [
        Validators.pattern(/^(?:(?:\+?[0-9]{2,6})?[ ]?[6789][0-9 -]{8,13})$/)
      ]),
      precio: new FormControl('', []),
      experiencia: new FormControl('', []),
      descripcion: new FormControl('', []),
      infancia_o_adulto: new FormControl('infancia', [])
    }, [this.checkPassword]);
  }

  async onSubmit() {
    this.errorMessage = '';
    if (this.formEdit.value.rol === 'cliente' || this.formEdit.value.telefono !== '') {
      const response = await this.usuariosService.updateUser(this.formEdit.value);
      if (!response) {
        this.toastrService.error("El usuario no pudo ser actualizado");
      } else {
        this.toastrService.success("Perfil de usuario actualizado");
        this.router.navigate(['/panel', 'perfil']);
      }
    } else
      this.toastrService.error("Los campos teléfono y clientela son requeridos para logopedas");
  }

  redirect(): void {
      this.router.navigate(['/auth/login']);
  }

  checkControl(formcontrolName: string, validator: string): boolean | undefined {
    return this.formEdit.get(formcontrolName)?.hasError(validator) && this.formEdit.get(formcontrolName)?.touched;
  }

  checkPassword(formValue: AbstractControl) {
    const password = formValue.get('password')?.value;
    const repeatPassword = formValue.get('repitepassword')?.value;
    if (password !== repeatPassword) return {'checkpassword': true};
    else return null;
  }

}
