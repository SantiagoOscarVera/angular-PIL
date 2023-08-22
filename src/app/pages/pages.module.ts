import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    CotizacionesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingComponent,
    DashboardComponent,
    CotizacionesComponent
  ]
})
export class PagesModule { }
