import { Component, inject } from '@angular/core';
import { cliente } from '../../interfaces/panel.interfaces';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  arrPendientes: cliente[] | any[] = [];
  panelServie = inject(PanelService);

  async ngOnInit(){
    try{
      const pendientes = await this.panelServie.getClientesByLogopeda();
      this.arrPendientes = pendientes.filter(cliente => cliente.status === 'pendiente' && cliente.estado_u === 1);
      console.log(this.arrPendientes)
    }catch(err){
      console.log(err)
    }
    
  }

}
