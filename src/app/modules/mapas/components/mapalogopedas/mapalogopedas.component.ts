import { Component, QueryList, ViewChildren, inject } from '@angular/core';
import { mapalogopedasService } from '../../services/mapalogopedas.service';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-mapalogopedas',
  templateUrl: './mapalogopedas.component.html',
  styleUrls: ['./mapalogopedas.component.css']
})
export class MapalogopedasComponent {

  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow> | any;

  options: any = {
    width: '100%',
    height: '85vh',
    zoom: 5,
    center: new google.maps.LatLng(40,-3)
  
  }

  mapalogopedasService = inject(mapalogopedasService);
  arrLogopedas: ILogopeda[] = [];
  arrMarkers: any[] = [];


  ngOnInit() :void {
    this.mapalogopedasService.getAll().subscribe(data => {
      //console.log(data)
      data.forEach(logopeda => {
        this.arrMarkers.push({
          apellidos: logopeda.apellidos,
          descripcion: logopeda.descripcion,
          direccion: logopeda.direccion,          
          icon: {
            url: logopeda.imagen,
            scaledSize: new google.maps.Size(70, 40)
          },
          nombre: logopeda.nombre,
          position: new google.maps.LatLng(logopeda.latitud,logopeda.longitud),
          precio: logopeda.precio
          // me daba error latitud, quite ? en Ilogopeda
        })
      })
     //console.log(this.arrMarkers)
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
