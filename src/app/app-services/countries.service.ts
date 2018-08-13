import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Http, Response} from "@angular/http";

@Injectable()
export class CountriesService {
  url: string;
  url_search: string;

  constructor(private http: Http) {
    this.url = 'https://restcountries.eu/rest/v2/regionalbloc/eu';
    this.url_search = 'https://restcountries.eu/rest/v2/name/';
  }

  getAllCountries(): Observable<any> {
    return this.http.get(this.url).map((res: Response) => res.json());
  }

  getCountriesBySearch(term): Observable<any> {
    return this.http.get(this.url_search + term).map((res: Response) => res.json());
  }

}
