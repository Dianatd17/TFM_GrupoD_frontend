import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://restcountries.com/v3.1/subregion/europe';

  getAll(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.baseUrl);
  }

}
