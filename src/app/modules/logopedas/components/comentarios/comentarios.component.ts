import { Component, inject } from '@angular/core';
import { Icomentarios } from '../../interfaces/icomentarios';
import { LogopedasService } from '../../services/logopedas.service';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  isLog: boolean = false;
  comentariosClientes: Icomentarios = { nombre: "", comentarios: "", puntuacion: 0 };
  arrComentarios: Icomentarios[] = [];

  logopedasServices = inject(LogopedasService)
  usuarioService = inject(UsuariosService)
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);


  ngOnInit() {
    this.isLog = this.usuarioService.isLogged();

    if (!this.isLog) {
      this.router.navigate(['/home']);
    }

    this.activeRoute.params.subscribe((params) => {
      this.getComentariosClientes(params['id']);

    })



  }

  async getComentariosClientes(id: number) {
    try {

      const response = await this.logopedasServices.getComentariosById(id);
      if (response) {
        this.arrComentarios = response;
      }

    } catch (err) {
      console.log(err);
    }
  }

}
