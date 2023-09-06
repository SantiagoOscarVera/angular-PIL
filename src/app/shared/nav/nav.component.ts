import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginOn: boolean = false; /* por defecto no estamos logueados */

  constructor(private authService: AuthService) {} // inyecto el servicio de autentificacion

  ngOnInit(): void {
    this.authService.isUserLoginOn.subscribe({
      next:(isUserLoginOn:boolean) => {
        this.loginOn=!isUserLoginOn; /* aca tratamos los if que tienen el iniciar sesion y el cerrar sesion  para que cambie cuando se ponen los datos correctos*/
      }
    })
  }

}
