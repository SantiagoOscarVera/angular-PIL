import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService { /* es un provider asi que lo ponemos en app.module y ademas se importa en el constructor del compoenente en este caso cotizaciones */
  
  /* url:string = "./assets/data/06-07-23.json" */ // traemos la info de este json
  url:string = "http://localhost:3000/titulos" // tambien podemos usar json serve para ver la api de forma dinamica

  constructor(private http: HttpClient) { }

  getCotizaciones():Observable<any> {
    return this.http.get(this.url)
  }
}
