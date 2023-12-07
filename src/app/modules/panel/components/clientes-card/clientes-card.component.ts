import { Component, Input, inject } from '@angular/core';
import { cliente } from '../../interfaces/panel.interfaces';
import { PanelService } from '../../services/panel.service';


@Component({
  selector: 'app-clientes-card',
  templateUrl: './clientes-card.component.html',
  styleUrls: ['./clientes-card.component.css']
})

export class ClientesCardComponent {
  @Input() clientes: cliente | any;
  solicitud: boolean = false
  panelService = inject(PanelService)
  
  ngOnInit(){
    if(this.clientes.status === 'pendiente'){
      this.solicitud = true
    }
  }

   async aceptar(){
    try{
      /* recupero la clase para actualizarla */
      const clase = await this.panelService.getClaseById(this.clientes.id.toString());
      //Recorto la fecha en un fomrato aceptado
      const indiceCorte = clase.fecha_inicio.indexOf(':');
      clase.fecha_inicio = clase.fecha_inicio.substring(0,indiceCorte);
      //Cambio a aceptado el status
      clase.status = 'aceptado'
      //Llamo al servicio para actualizarlo
      const result = await this.panelService.updateStatus(this.clientes.id.toString(), clase);
      console.log(result)
      
      /* const result = await this.panelService.updateStatus(this.clientes.id.toString(), clase)
      console.log(result) */
      
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
      
      
      /* const result = await this.panelService.updateStatus(this.clientes.id.toString(), clase)
      console.log(result) */
      
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
      const result = await this.panelService.updateStatus(this.clientes.id.toString(), clase);
     
      //const [result] = this.panelService.getClaseById
    }catch(error){
      console.log(error)
    }
  }

 

  
  
}
