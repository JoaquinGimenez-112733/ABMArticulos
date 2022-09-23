import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtAltaComponent } from './art-alta/art-alta.component';
import { ArtListadoComponent } from './art-listado/art-listado.component';

const routes: Routes = [
  {path:"listado", component: ArtListadoComponent},
  {path:"alta", component: ArtAltaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
