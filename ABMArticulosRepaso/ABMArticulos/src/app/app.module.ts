import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtListadoComponent } from './art-listado/art-listado.component';
import { ArtAltaComponent } from './art-alta/art-alta.component';
import { ArtBajaComponent } from './art-baja/art-baja.component';
import { ArtModComponent } from './art-mod/art-mod.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosService } from './services/articulos.service';
import { CategoriaService } from './services/categoria.service';
@NgModule({
  declarations: [
    AppComponent,
    ArtListadoComponent,
    ArtAltaComponent,
    ArtBajaComponent,
    ArtModComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticulosService, CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
