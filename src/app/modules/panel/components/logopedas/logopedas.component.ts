import { Component, inject } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { logopedas } from '../../interfaces/panel.interfaces';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';

@Component({
  selector: 'app-logopedas',
  templateUrl: './logopedas.component.html',
  styleUrls: ['./logopedas.component.css']
})
export class LogopedasComponent {
  arrLogopedas: logopedas[] | any[] = []
  localidad: string[] = []
  panelService = inject(PanelService)
  usuariosService = inject(UsuariosService)

  async ngOnInit(){
    try{
      this.arrLogopedas = (await this.panelService.getLgopedasByClientes()).filter(log => log.estado_u === 1 && log.status !== 'denegado');
      console.log(this.arrLogopedas)
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

  getProfileImage(imagen: string): string {
    return this.usuariosService.getAvatarCard(imagen);
  }


}
