import { Component, QueryList, ViewChildren, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent {

  //para crear el info window tenemos que generar una vista html, para ello vamos a usar un decorador @ViewChild()
  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow> | any;

  options: any = {
    width: '100%',
    height: '85vh',
    zoom: 5,
    center: new google.maps.LatLng(40,-3)
  
  }

  countriesService = inject(CountriesService)
  arrCountries: Country[] = [];
  arrMarkers: any[] = []; //podría crear un interfaz de markers
  ngOnInit(): void{
    
    this.countriesService.getAll().subscribe(data => {
      //console.log(data);
      data.forEach(country => {
        this.arrMarkers.push({
          icon: {
            url: country.flags.png,
            scaledSize: new google.maps.Size(30, 20)
          },
          codigo: country.cca2,
          capital: country.capital[0],
          position: new google.maps.LatLng(country.latlng[0], country.latlng[1])

        })
      })
      console.log(this.arrMarkers)
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
