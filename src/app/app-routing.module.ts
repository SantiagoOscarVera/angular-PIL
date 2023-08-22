import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {path:"home", component:LandingComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"cotizaciones", component: CotizacionesComponent},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
