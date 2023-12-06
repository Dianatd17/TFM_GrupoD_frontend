import { Component, inject } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { logopedas } from '../../interfaces/panel.interfaces';

@Component({
  selector: 'app-logopedas',
  templateUrl: './logopedas.component.html',
  styleUrls: ['./logopedas.component.css']
})
export class LogopedasComponent {
  arrLogopedas: logopedas[] | any[] = []
  localidad: string[] = []
  panelService = inject(PanelService)

  async ngOnInit(){
    try{
      this.arrLogopedas = (await this.panelService.getLgopedasByClientes()).filter(log => log.estado_u === 1);

      this.localidad = this.arrLogopedas.map(log => log.localidad)
    
    } catch(err){
      console.log(err)
    }
  }

  colorStatus(status:string){
    switch(status){
      case 'aceptado':
        return '#198754'
      case 'pendiente':
        return '#FFC107'
      default:
         '#60BBDD'
    }
    return ''

  }


}
