import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {CountriesService} from "./app-services/countries.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'H1 - Explorador de spaisess';
  countrie_select: {};
  countries: Observable<any>;

  constructor(private CountriesService: CountriesService) {
    this.countries = this.CountriesService.getAllCountries()
  }

  onQuery(term: string) {
    if (term) {
      this.countries =  this.CountriesService.getCountriesBySearch(term)
    } else {
      this.countries = this.CountriesService.getAllCountries()
    }
  }

  onSelect(value) {
    if(value){
      console.log('Buscar mapa para ' +value.name);
    }

  }
}
