import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService { /* es un provider asi que lo ponemos en app.module y ademas se importa en el constructor del compoenente en este caso cotizaciones */
  
  url:string = "./src/assets/data/06-07-23.json"

  constructor(private http: HttpClient) { }

  getCotizaciones():Observable<any> {
    return this.http.get(this.url)
  }
}
