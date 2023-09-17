import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable,tap, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url:string="https://reqres.in/api/login";
  private currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); /* esto es para que la autentificacion me habilite cambios al iniciar sesion */

  constructor(private http:HttpClient) { }

  login(loginRequest:any):Observable<any> {
    return  this.http.post(this.url,loginRequest).pipe( /* pipe me permite encadenar el error y el behaviorSubject */
      tap((token) => { // usamos al tap para que "agarre" una accion
        if(JSON.stringify(token).length!=0) // agregar validacion y es para que devuelva el token
        {
          this.currentUserLoginOn.next(true)
        } // siempre ponerle next para especificar el siguiente valor
      }),
      catchError(this.handleError)
    );
  }

  get isUserLoginOn():Observable<boolean> /* con esto los demas componentes pueden acceder desde afuera al servicio */
  {
    return this.currentUserLoginOn.asObservable(); /* esto labura con el observable de arriba */
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      console.error('An error occurred:', error.error);
    } else {
      
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
