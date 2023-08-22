import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginOn: boolean = false; /* por defecto no estamos logueados */

  constructor() {}

  ngOnInit(): void {
    
  }

}
