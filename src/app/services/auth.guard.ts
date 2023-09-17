import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import {take, tap } from "rxjs"

Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router:Router)
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.authService.isUserLoginOn.pipe( // el pipe encadena
        take(1),  // el operador take captura el observable y es un "ya esta, no lo voy a escuchar mas"
        tap((isUserLoginOn) =>{// captura y nos devuelve un pedazo de codigo, deja la informacion y devuelve un boolean
          if(!isUserLoginOn) {
            this.router.navigate(["/login"]) // si el usuario no esta autentificado lo voy a mandar al login
          }
        },
        //yo no quiero que devuelva el observable sino el booleano entonces usamos el map
        ) 
      ) 
      return true
    }
}
