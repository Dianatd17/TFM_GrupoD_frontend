import { Component, inject } from '@angular/core';
import { PanelService } from '../services/panel.service';
import { ActivatedRoute, RouteConfigLoadStart, Router } from '@angular/router';
import { UsuariosService } from '../../auth/services/usuarios.service';


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
  activateRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService)

  async ngOnInit(){
    /* Asi siempre se queda activo Mi panel en el header */
    //Redirige de /panel a /panel/...
    //El segundo requisito es para que cuando recargues la pagina no te lleve siempre al panel/clientes o panel/logopedas


   const ruta = this.router.url
    if(this.userRol() === 'logopeda' && ruta === '/panel'){
      this.router.navigate(['/panel/clientes'])
    }else if(this.userRol() === 'cliente'){
      this.router.navigate(['/panel/logopedas'])
    }
    
    try{
      this.user = await this.panelService.getUser()
      this.user.imagen = this.usuariosService.getAvatarProfile(this.user.imagen);
    }catch(error){
      console.log('Ha ocurrido un error')
    }
  }

  userRol(){
    const rol = this.panelService.rolUser()
    return rol 
  }

}
