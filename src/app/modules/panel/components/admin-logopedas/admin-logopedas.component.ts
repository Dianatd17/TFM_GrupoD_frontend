import { Component, inject } from '@angular/core';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-admin-logopedas',
  templateUrl: './admin-logopedas.component.html',
  styleUrls: ['./admin-logopedas.component.css']
})
export class AdminLogopedasComponent {

  panelService = inject(PanelService);
  listado: ILogopeda[] = [];

  async ngOnInit(): Promise<void> {

    try {
      const response = await this.panelService.getLogopedasPendientes();
      this.listado = response;
    } catch(error) {
      console.log(error);
    }

  }

}
