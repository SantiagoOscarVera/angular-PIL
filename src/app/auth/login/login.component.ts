import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = this.formBuilder.group({ /* para manejar el formulario */
    email: ['santiago'],  /* lo que va entre parentesis vendria a ser un valor por defecto */
    password: ['']
  })


  constructor (private formBuilder: FormBuilder) {} /* FormBuilder es un servicio que se utiliza para poder construir formularios */

  ngOnInit(): void {
  }

}
