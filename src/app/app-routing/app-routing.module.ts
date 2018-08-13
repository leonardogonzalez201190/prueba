import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DescripcionComponent} from "../menu-components/descripcion/descripcion.component";
import {MonedaComponent} from "../menu-components/moneda/moneda.component";
import {ClimaComponent} from "../menu-components/clima/clima.component";
import {NoticiasComponent} from "../menu-components/noticias/noticias.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: 'noticias/:id', component: NoticiasComponent},
  {path: 'descripcion/:id', component: DescripcionComponent},
  {path: 'moneda/:id', component: MonedaComponent},
  {path: 'clima/:id', component: ClimaComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ enableTracing: true }),

  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {

}
