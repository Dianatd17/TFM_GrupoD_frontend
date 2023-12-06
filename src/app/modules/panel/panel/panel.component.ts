import { Component, inject } from '@angular/core';
import { PanelService } from '../services/panel.service';
import { RouteConfigLoadStart, Router } from '@angular/router';


type user = { usedr_id: string, nombre : string, apellidos:string, email:string, password: string, longitud: number, latitud:number, direccion: string, localidad: string, provincia: string, status: any, rol: string, iamgen: string  }


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  panelService = inject(PanelService);
  user: user | any
  router = inject(Router);

  async ngOnInit(){
    /* Asi siemppre se queda actio Mi panel en el header */
    //Redirige de /panel a /panel/...
    if(this.userRol() === 'logopeda'){
      this.router.navigate(['/panel/clientes'])
    }else if(this.userRol() === 'cliente'){
      this.router.navigate(['/panel/logopedas'])
    }
    
    try{
      this.user = await this.panelService.getUser()
    }catch(error){
      console.log('Ha ocurrido un error')
    }
  }

  userRol(){
    const rol = this.panelService.rolUser()
    return rol 
  }



}
