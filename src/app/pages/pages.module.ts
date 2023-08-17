import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
