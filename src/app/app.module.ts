import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { CotizacionesService } from './services/cotizaciones.service';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    HttpClientModule /* se importa para poder consumirlo porque es un servicio y se lleva a mi cotizaciones.service */
  ],
  providers: [CotizacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
