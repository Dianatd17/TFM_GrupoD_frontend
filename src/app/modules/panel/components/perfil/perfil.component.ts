import { Component, inject } from '@angular/core';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  boton: string = "edit";
  usuariosService = inject(UsuariosService);

  switchContent(btn: string): void {
    this.boton = btn;
  }

}
