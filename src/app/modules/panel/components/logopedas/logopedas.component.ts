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
  panelService = inject(PanelService)

  async ngOnInit(){
    try{
      this.arrLogopedas = await this.panelService.getLgopedasByClientes();
      console.log(this.arrLogopedas)
    } catch(err){
      console.log(err)
    }
  }

}
