import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ComboBoxModule} from "ng2-combobox";
import {AppComponent} from "./app.component";
import {NoticiasComponent} from "./menu-components/noticias/noticias.component";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { DescripcionComponent } from './menu-components/descripcion/descripcion.component';
import { MonedaComponent } from './menu-components/moneda/moneda.component';
import { ClimaComponent } from './menu-components/clima/clima.component'
import {CountriesService} from "./app-services/countries.service"

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    DescripcionComponent,
    MonedaComponent,
    ClimaComponent
  ],
  imports: [
    ComboBoxModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
