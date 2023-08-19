import { Component, OnInit } from '@angular/core';
import { CotizacionesService } from 'src/app/services/cotizaciones.service';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})

export class CotizacionesComponent implements OnInit{
  title:string = "Cotizaciones"
  imagen:string = "https://cdn-icons-png.flaticon.com/512/1688/1688988.png "

  constructor(private cotizacionesService:CotizacionesService) {}

  ngOnInit(): void {}

  refrescar_cotizaciones() {
    
    this.cotizacionesService.getCotizaciones().subscribe( // el servicio de cotizaciones tiene que suscribirse (a cotizaciones.service) para obtener los datos del get
    data => {
      console.log(data)
    }
    )
  }
}
