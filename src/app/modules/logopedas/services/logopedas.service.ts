import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';


@Injectable({
  providedIn: 'root'
})
export class LogopedasService {

  //"https://jsonblob.com/api/jsonBlob/1177751215915524096"
  //http://localhost:3000/api/public
  private baseUrl: string = "http://localhost:3000/api/public";
  httpClient = inject(HttpClient);
  constructor() { }


  getTop20(): Promise<ILogopeda[]> {
    return lastValueFrom(this.httpClient.get<ILogopeda[]>(this.baseUrl))
  }


}
