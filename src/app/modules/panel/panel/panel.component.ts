import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../auth/services/usuarios.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  userService = inject(UsuariosService);

  userRol(){
    
    // return this.userService.getRole()
    //TODO Hasta que vaya el back
    return 'logopeda'
  }

}
