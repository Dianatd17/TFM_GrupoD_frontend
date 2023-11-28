import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { isEmpty } from 'rxjs';

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
    //this.log = this.loginService.getLog();
    localStorage.setItem('auth_token', 'esto es el localstorage ikjfhiuefhfwe8ry487332')
    console.log(localStorage.getItem('auth_token'))
    this.log = this.userService.isLogged();
  }


  
  cambiar(){
    this.loginService.loginLogOut()
    this.log = this.loginService.getLog();
  }

  cerrarSesion(){
    localStorage.removeItem('auth_token');
    this.log = this.userService.isLogged()
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
