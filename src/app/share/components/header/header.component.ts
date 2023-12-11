import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  loginService = inject(LoginService)
  log:boolean = false
  router = inject(Router);

  openMenu: boolean = false
  imagenLogin: any;

  userService = inject(UsuariosService);
  imagen: string = '../../../../assets/images/user.png';


  async ngOnInit(){
    this.log = this.userService.isLogged();
    // Buscamos la imagen de usuario en el servicio con getRutaImagen, y si tiene imagen sobreescribimos la imagen por defecto
    try {
      const response = await this.userService.getRutaImagen();
      if (response.imagen && response.imagen !== '') {
        this.imagen = response.imagen;
      }
    } catch (error) {
      console.log(error);
    }
  }

  cerrarSesion(){
    localStorage.removeItem('auth_token');
    this.log = this.userService.isLogged();
    window.location.href = "/home";
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
  
  
  cambiar(){
    this.loginService.loginLogOut()
    this.log = this.loginService.getLog();
  }

}
