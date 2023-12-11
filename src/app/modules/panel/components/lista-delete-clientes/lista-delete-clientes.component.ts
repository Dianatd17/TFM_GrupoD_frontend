import { Component, Input, inject } from '@angular/core';
import { cliente } from '../../interfaces/panel.interfaces';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-lista-delete-clientes',
  templateUrl: './lista-delete-clientes.component.html',
  styleUrls: ['./lista-delete-clientes.component.css']
})
export class ListaDeleteClientesComponent {

  @Input() usuario: cliente | any;
  usuariosService = inject(UsuariosService);
  panelService = inject(PanelService);
  status: string[] = ["Desactivado", "Activo"];

  desactivar() {
    this.panelService.desactivarCliente(this.usuario.id, {status: 0})
    .then((response) => {
      if(response.affectedRows > 0) this.usuario.status = 0;
    })
    .catch((error) => {
      console.log(error);
    })
  }

}
