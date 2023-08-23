import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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


  constructor (private formBuilder: FormBuilder) {} /* FormBuilder es un servicio que se utiliza para poder construir formularios */

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.controls.email; /* me muestra mensaje cuando se hace click en el casillero de mail y muestra alert cuando no esta correcto */
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    
  }
}
