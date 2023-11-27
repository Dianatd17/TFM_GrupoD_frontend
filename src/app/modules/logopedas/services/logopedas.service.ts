import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogopedasService {

  private baseUrl: string = "https://jsonblob.com/api/jsonBlob/1177751215915524096";
  httpClient = inject(HttpClient);
  constructor() { }


  getTop20(): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }

}
