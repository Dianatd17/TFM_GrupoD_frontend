import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';

@Component({
  selector: 'app-form-image',
  templateUrl: './form-image.component.html',
  styleUrls: ['./form-image.component.css']
})
export class FormImageComponent {

  router = inject(Router);
  usuariosService = inject(UsuariosService);
  toastrService = inject(ToastrService);
  files: any;

  onSubmit() {
    // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
    let fd = new FormData();
    fd.append('imagen', this.files[0]);
    // Delegamos el envío del formulario en el servicio
    /*this.usuariosService.updateUserImage(fd).then(result => {
      this.router.navigate(['/panel', 'perfil']);
    })*/
    this.usuariosService.updateUserImage(fd).subscribe({
      next: (result) => {
        this.toastrService.success("Imagen de perfil actualizada");
      },
      error: (err) => {
        console.log(err);
        this.toastrService.error("Imagen de perfil no actualizada");
      },
      complete: () => {
        console.log("Se completó la tarea");
      }
    })
    /*const result = this.usuariosService.updateUserImage(fd);
    if (result) {
      console.log(result);
    } else {
      console.log("error");
    }*/
  }

  onChange(event: any) {
    this.files = event.target.files;
    console.log(this.files[0]);
  }

}
