import { Component, Input, inject } from '@angular/core';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-lista-pendientes',
  templateUrl: './lista-pendientes.component.html',
  styleUrls: ['./lista-pendientes.component.css']
})
export class ListaPendientesComponent {

  @Input() logopeda: ILogopeda | any;
  usuariosService = inject(UsuariosService);
  panelService = inject(PanelService);

  validar() {
      this.panelService.verificarLogopeda(this.logopeda.id, {status: 1})
      .then((response) => {
        this.logopeda.status = response.affectedRows;
        window.location.href = "/panel";
      })
      .catch((error) => {
        console.log(error);
      })
  }

  rechazar() {
    this.panelService.rechazarLogopeda(this.logopeda.id, {status: -1})
    .then((response) => {
      this.logopeda.status = response.affectedRows;
      window.location.href = "/panel";
    })
    .catch((error) => {
      console.log(error);
    })
  }

}
