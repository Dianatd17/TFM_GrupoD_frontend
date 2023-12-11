import { Component, inject } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { IUser } from 'src/app/core/models/user.interface';
import { ClientesService } from 'src/app/modules/clientes/services/clientes.service';

@Component({
  selector: 'app-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.css']
})
export class AdminClientesComponent {

  panelService = inject(PanelService);
  clientesService = inject(ClientesService);
  listadoTodos: IUser[] = [];
  listado: IUser[] = [];

  async ngOnInit(): Promise<void> {

    try {
      const response = await this.clientesService.getAllClientes();
      this.listadoTodos = response;
      this.listado = response;
    } catch(error) {
      console.log(error);
    }

  }

  buscar(event: any) {
    this.listado = this.listadoTodos.filter(cliente =>
      cliente.email.toLowerCase().includes(event.target.value) 
      || cliente.nombre.toLowerCase().includes(event.target.value) 
      || cliente.apellidos.toLowerCase().includes(event.target.value)
    )
  }

}
