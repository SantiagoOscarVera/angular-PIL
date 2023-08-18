import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {path:"home", component:LandingComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"cotizaciones", component: CotizacionesComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
