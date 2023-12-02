import { Component, inject, Input } from '@angular/core';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { LogopedasService } from '../../services/logopedas.service';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-lista-logopedas',
  templateUrl: './lista-logopedas.component.html',
  styleUrls: ['./lista-logopedas.component.css']
})
export class ListaLogopedasComponent {
  arrUsers: ILogopeda[] = [];
  activeRoute = inject(ActivatedRoute);
  router = inject(Router);


  logopedasServices = inject(LogopedasService)
  usuarioService = inject(UsuariosService)
  isLog: boolean = false;



  ngOnInit(): void {
    // prueba
    this.isLog = this.usuarioService.isLogged();

    if (this.isLog) {
      let edad: string = ""
      this.activeRoute.params.subscribe((params: any) => {
        console.log(params.edad);
        edad = params.edad;

        if (edad) {
          this.getLogopedasEdad(edad);
        } else {
          this.router.navigate(['/home']);
          this.getLogopedasMejorValoradoTop20();
        }

      })
    } else {
      this.getLogopedasMejorValoradoTop20();

    }



  }


  async getLogopedasEdad(edad: string) {
    try {
      const response = await this.logopedasServices.getLogopedaByEdad(edad);
      this.arrUsers = response;

    } catch (err) {
      console.log(err);
    }
  }

  async getLogopedasMejorValoradoTop20() {
    try {

      const response = await this.logopedasServices.getTop20();
      this.arrUsers = response;
    } catch (err) {
      console.log(err);
    }
  }
}
