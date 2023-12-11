import { Component, HostListener, inject } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { logopedas } from '../../interfaces/panel.interfaces';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-logopedas',
  templateUrl: './logopedas.component.html',
  styleUrls: ['./logopedas.component.css']
})
export class LogopedasComponent {
  arrLogopedas: logopedas[] | any[] = []
  localidad: string[] = [];
  ids: any[] = []
  panelService = inject(PanelService)
  usuariosService = inject(UsuariosService)
  valorar:FormGroup;
  toastr = inject(ToastrService);
  puntuaciones = [5,4,3,2,1];
  minota: any
  miIndice:any

  constructor(){
    this.valorar = new FormGroup({
      puntuacion: new FormControl(''),
      comentario: new FormControl('')
    },[])
  }

  async ngOnInit(){
    try{
      this.arrLogopedas = (await this.panelService.getLgopedasByClientes()).filter(log => log.estado_u === 1 && log.status !== 'denegado');
      this.localidad = this.arrLogopedas.map(log => log.localidad)
      this.ids = this.arrLogopedas.map(log => log.id)
    
    } catch(err){
      console.log(err)
    }
  }



  colorStatus(status:string){
    switch(status){
      case 'aceptado':
        return '#198754'
      case 'pendiente':
        return '#FFC107'
      default:
         '#60BBDD'
    }
    return ''
    
  }
  
  getProfileImage(imagen: string): string {
    return this.usuariosService.getAvatarCard(imagen);
  }
  
  getDataForm(i:any){
    this.valorar.value.puntuacion = this.minota
    this.upDateComents(this.miIndice)
  }

  //Actualiza el valor de la nota cada vez que se clcia sobre una estrella
  mandarNota(not:any){
    this.minota = not
  }

  //Conseguir el id a modificar ya que el ngFor no interactua bien con los argumento del getDataForm()
  claseModificada(id:any){
    this.miIndice = id
  }


  async upDateComents(id:any){
    try{
      const clase = await this.panelService.getClaseById(id);
      const indiceCorte = clase.fecha_inicio.indexOf(':');
      clase.fecha_inicio = clase.fecha_inicio.substring(0,indiceCorte);
      clase.comentarios = this.valorar.value.comentario;
      clase.puntuacion = this.valorar.value.puntuacion
      const result = await this.panelService.updateStatus(id, clase)

      if(result?.Succes){
        this.toastr.success('la pagina se recargará', 'Valoración enviada correctamente', {timeOut: 1000});
        setTimeout( () =>{
        location.href = 'http://localhost:4200/panel/logopedas' 
        },1000)
      } 
    }catch (error){
      console.log(error)
    }
  }




}
