import { Component, Input } from '@angular/core';
import { cliente } from '../../interfaces/panel.interfaces';

@Component({
  selector: 'app-clientes-card',
  templateUrl: './clientes-card.component.html',
  styleUrls: ['./clientes-card.component.css']
})
export class ClientesCardComponent {
  @Input() clientes: cliente | any;
  solicitud: boolean = false
  
  ngOnInit(){
    if(this.clientes.status === 'pendiente'){
      this.solicitud = true
    }
  }

  
  
}
