import { Component, inject } from '@angular/core';
import { PanelService } from '../services/panel.service';
import { RouteConfigLoadStart } from '@angular/router';


type user = { usedr_id: string, nombre : string, apellidos:string, email:string, password: string, longitud: number, latitud:number, direccion: string, localidad: string, provincia: string, status: any, rol: string, iamgen: string  }


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  panelService = inject(PanelService);
  user: user | any

  async ngOnInit(){
    try{
      this.user = await this.panelService.getlogopedaById()
    }catch(error){
      console.log('Ha ocurrido un error')
    }
  }

  userRol(){
    /* const rol = this.panelService.idUser()
    return rol  */
    // return this.userService.getRole()

    
    //TODO Hasta que vaya el back
    return 'logopeda'
  }



}
