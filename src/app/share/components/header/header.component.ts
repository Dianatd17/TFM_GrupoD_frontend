import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  loginService = inject(LoginService)
  log:boolean = false

  openMenu: boolean = false
  imagenLogin: any;

  userService = inject(UsuariosService);


  ngOnInit(){
    this.log = this.loginService.getLog();
  }
  
  cambiar(){
    this.loginService.loginLogOut()
    this.log = this.loginService.getLog();

  }


  esconderImagen(){
    if(!this.openMenu){
        this.openMenu = !this.openMenu
    }else{
      setTimeout(() =>{
        this.openMenu = !this.openMenu
      }, 350)
    }
  }

}
