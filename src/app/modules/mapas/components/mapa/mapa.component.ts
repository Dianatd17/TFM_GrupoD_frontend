import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow,MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  //para crear el info window tenemos que generar una vista html, para ello vamos a usar un decorador @ViewChild()
  @ViewChild(MapInfoWindow) miInfoWindow: MapInfoWindow | any;
  
  //center: google.maps.LatLng= 
  center: google.maps.LatLng | any;
  zoom: number = 18;
  myposition: google.maps.LatLng | any; //con any no tengo pq inicializarlo
  markerOptions = {
    animation: google.maps.Animation.BOUNCE,
    icon: {
      url: 'https://www.media.io/images/images2022/loop-video/person5.png',
      scaledSize: new google.maps.Size(40,40)
    }
    
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords); //me devuelve mi latitud y longitud
      const { latitude, longitude } = position.coords;
      this.myposition = new google.maps.LatLng(latitude, longitude);
      this.center = this.myposition;
    })
  }

  openInfoWindow(miMarker: MapMarker) {
    this.miInfoWindow.open(miMarker) //que abra la infowindow del "miMarker", en el que clicke
  }

}
