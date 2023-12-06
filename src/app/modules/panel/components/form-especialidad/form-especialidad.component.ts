import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IEspecialidad } from 'src/app/core/models/especialidad.interface';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { EspecialidadesService } from 'src/app/modules/especialidades/services/especialidades.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-especialidad',
  templateUrl: './form-especialidad.component.html',
  styleUrls: ['./form-especialidad.component.css']
})
export class FormEspecialidadComponent {

  especialidadesService = inject(EspecialidadesService);
  usuariosService = inject(UsuariosService);
  private toastrService = inject(ToastrService);
  listado: IEspecialidad[] | any = [];
  marcadas: number[] = [];
  httpClient = inject(HttpClient);

  async ngOnInit(): Promise<void> {
    try {
      this.listado = await this.especialidadesService.getAllEspecialidades();
      const misEspecialidades = await this.especialidadesService.getByLogopedaId(this.usuariosService.getIdUsuario());
      this.marcadas = misEspecialidades.map(x => x.id);
    } catch(error) {
      console.log(error);
    }
  }

  async onClick(e: any) {
    if (e.target.checked) {
      //agregamos
      try {
        const response = await this.especialidadesService.relateToEspecialidad(this.usuariosService.getIdUsuario(), e.target.value);
        if (response) {
          this.marcadas.push(e.target.value);
          this.toastrService.success("Especialidades actualizadas");
        } else {
          this.toastrService.error("No se pudo agregar la especialidad");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // borramos
      try {
        const response = await this.especialidadesService.deleteEspecialidad(this.usuariosService.getIdUsuario(), e.target.value);
        if (response) {
          this.marcadas = this.marcadas.filter(x => x !== e.target.value);
          this.toastrService.success("Especialidades actualizadas");
        } else {
          this.toastrService.error("No se pudo eliminar la especialidad");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

}
