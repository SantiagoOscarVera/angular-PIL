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
  listCotizaciones: any;

  constructor(private cotizacionesService:CotizacionesService) {}

  ngOnInit(): void {
    this.refrescar_cotizaciones() //refresca el componente automaticamente 
  }

  refrescar_cotizaciones() {
    
    this.cotizacionesService.getCotizaciones().subscribe({ // el servicio de cotizaciones tiene que suscribirse (a cotizaciones.service) para obtener los datos del get
      next: (listCotizaciones) => {
        /* this.listCotizaciones = listCotizaciones["titulos"] */
        this.listCotizaciones = listCotizaciones // cuando en el cotizaciones servi usamos la api dinamica del localhost "/titulos" no hay que poner el array "titulos"
      },
      error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.info("get cotizaciones complete")
        }
      }
    )
  }
}
