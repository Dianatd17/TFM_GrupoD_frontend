import { Component, Input, inject } from '@angular/core';
import { cliente } from '../../interfaces/panel.interfaces';
import { PanelService } from '../../services/panel.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import * as dayjs from 'dayjs';
dayjs().format();

@Component({
  selector: 'app-clientes-card',
  templateUrl: './clientes-card.component.html',
  styleUrls: ['./clientes-card.component.css']
})

export class ClientesCardComponent {
  @Input() clientes: cliente | any;
  solicitud: boolean = false
  panelService = inject(PanelService);
  router = inject(Router);
  toastr = inject(ToastrService);
  usuariosService = inject(UsuariosService);

  
  ngOnInit(){
    if(this.clientes.status === 'pendiente'){
      this.solicitud = true
    }
  }


  
  //TODO PODRIA HACER UN METODO Y LLAMARLO EN LOS 3 BOTONES O UNA VARIABLE
  async aceptar(){
    try{
      /* Recupero la clase para actualizarla */
      const clase = await this.panelService.getClaseById(this.clientes.id.toString());
      //Recorto la fecha en un fomrato aceptado
      const indiceCorte = clase.fecha_inicio.indexOf(':');
      clase.fecha_inicio = clase.fecha_inicio.substring(0,indiceCorte);
      //Cambio a aceptado el status
      clase.status = 'aceptado'
      //Llamo al servicio para actualizarlo
      const result = await this.panelService.updateStatus(this.clientes.id.toString(), clase);
      if(result.Succes){
        this.toastr.success('la pagina se recargará', 'El Alumno ha sido aceptado', {timeOut: 1000});
        setTimeout( () =>{
        location.href = 'http://localhost:4200/panel/notificaciones' //! OJO CON ESTO SI HACEMOS DEPLAY
        },1000)
      }
    }catch(error){
      console.log(error)
    }
  } 
  
  async rechazar(){
    try{
      /* recupero la clase para actualizarla */
      const clase = await this.panelService.getClaseById(this.clientes.id.toString());
      //Recorto la fecha en un fomrato aceptado
      const indiceCorte = clase.fecha_inicio.indexOf(':');
      clase.fecha_inicio = clase.fecha_inicio.substring(0,indiceCorte);
      //Cambio a aceptado el status
      clase.status = 'denegado'
      //Llamo al servicio para actualizarlo
      const result = await this.panelService.updateStatus(this.clientes.id.toString(), clase);
      if(result.Succes){
        this.toastr.success('la pagina se recargará', 'El Alumno ha sido rechazado', {timeOut: 1000});
        setTimeout( () =>{
        location.href = 'http://localhost:4200/panel/notificaciones' //! OJO CON ESTO SI HACEMOS DEPLAY
        },1000)
      }
      
    }catch(error){
      console.log(error)
      
    }
  }  

  
  async finalizar(){
    try{
      const clase = await this.panelService.getClaseById(this.clientes.id.toString());
      const indiceCorte = clase.fecha_inicio.indexOf(':');
      clase.fecha_inicio = clase.fecha_inicio.substring(0,indiceCorte);
      clase.status = 'finalizado'
      clase.fecha_fin = dayjs().format('YYYY-MM-DD')
      const result = await this.panelService.updateStatus(this.clientes.id.toString(), clase);
      if(result.Succes){
        this.toastr.success('la pagina se recargará', 'El Alumno ha sido rechazado', {timeOut: 1000});
        setTimeout( () =>{
        location.href = 'http://localhost:4200/panel/clientes' //! OJO CON ESTO SI HACEMOS DEPLAY
        },1000)
      } 
    }catch(error){
      console.log(error)
    }
  }

  getProfileImage(): string {
    return this.usuariosService.getAvatarCard(this.clientes.imagen);
  }

  
  
}
