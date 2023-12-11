import { Component, inject } from '@angular/core';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
   arrayClients: any[] = [1,2,3,4,5]
   panelService = inject(PanelService)

   async ngOnInit(){
    try{
      const clientes = await this.panelService.getClientesByLogopeda();
      this.arrayClients = clientes.filter(cli => cli.status === 'aceptado' && cli.estado_u === 1)
    }catch(error){
      console.log(error)
    }
   }
}
