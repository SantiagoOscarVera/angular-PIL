import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = this.formBuilder.group({ /* para manejar el formulario */
    email: ['', [Validators.required, Validators.email]],  /* lo que va entre parentesis vendria a ser un valor por defecto */
    password: ['', Validators.required]
  })


  constructor (private formBuilder: FormBuilder, private authService: AuthService, private route: Router) {} /* FormBuilder es un servicio que se utiliza para poder construir formularios */ /* tambien inyectamos el authService */

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.controls.email; /* me muestra mensaje cuando se hace click en el casillero de mail y muestra alert cuando no esta correcto */
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe ( /* se tiene que suscribir sino no va a pasar nada */
      {
        next: (data) => {
          console.log(data)
          this.route.navigate(["/dashboard"])
        },
        error: (error) => {console.log(error)},
        complete: () => {console.log()}
      }
    )
  }
}
