import {  Component, Input, QueryList, ViewChildren, inject } from '@angular/core';
import { mapalogopedasService } from '../../services/mapalogopedas.service';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { UsuariosService } from 'src/app/modules/auth/services/usuarios.service';

@Component({
  selector: 'app-mapalogopedas',
  templateUrl: './mapalogopedas.component.html',
  styleUrls: ['./mapalogopedas.component.css']
})
export class MapalogopedasComponent {

  @Input() ruta: string = "";

  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow> | any;

  options: any = {
    width: '100%',
    height: '85vh',
    zoom: 7,
    center: new google.maps.LatLng(40,-3)
  
  }
  map: google.maps.Map | undefined;

  mapalogopedasService = inject(mapalogopedasService);
  usuariosService = inject(UsuariosService);
  arrLogopedas: ILogopeda[] = [];
  arrMarkers: any[] = [];
  servidorUrl: string = "http://localhost:3000/img/";


    ngAfterViewInit(): void {
      this.inicializarMapa(); 
       this.obtenerUbicacionActual();
    }
     obtenerUbicacionActual() {
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
           (position) => {
             const latitud = position.coords.latitude;
             const longitud = position.coords.longitude;
  
             // Actualizar el centro del mapa con las coordenadas actuales
             this.options.center = { lat: latitud, lng: longitud };
  
             // Inicializar el mapa con las nuevas opciones
           
           },
           (error) => {
             console.error('Error al obtener la ubicación:', error);
          }
         );
       } else {
         console.error('La geolocalización no está disponible en este navegador.');
       }
     }

  actualizarRuta(nuevaRuta: string) {
    this.ruta = nuevaRuta;
    this.inicializarMapa();
  }

  private inicializarMapa() {
    
    this.arrMarkers = [];
      
      this.mapalogopedasService.getAll(this.ruta).subscribe(data => {
        data.forEach(logopeda => {
          this.arrMarkers.push({
            id:logopeda.id,
            apellidos: logopeda.apellidos,
            descripcion: logopeda.descripcion,
            direccion: logopeda.direccion,          
            icon: {
              url: this.usuariosService.getAvatarCard(logopeda.imagen),
              scaledSize: new google.maps.Size(70, 40)
            },
            nombre: logopeda.nombre,
            position: new google.maps.LatLng(logopeda.latitud,logopeda.longitud),
            precio: logopeda.precio,
          })
        })
      })
  }

  openInfoWindow(marker: MapMarker, indice:number) {
    let contador=0;
    this.infoWindowsView.forEach((window: MapInfoWindow) => {
      if (indice === contador) {
        window.open(marker);
        contador++;
      } else {
        window.close();
        contador++;

      }
    })
  }
}
