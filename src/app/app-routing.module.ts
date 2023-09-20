import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:"home", component:LandingComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthGuard]}, // el can activate activa el servicio de autentificacion y su proteccion
  {path:"cotizaciones", component: CotizacionesComponent},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
