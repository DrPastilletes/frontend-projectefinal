import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public ferLogin(formulari, dades) {
    this.http.post('http://localhost:8000/comprovarLoginApi', formulari.value).subscribe(
      (res: any) => {
        dades(res);
      });
  }

  public agafarCategories(id, dades) {
    this.http.post('http://localhost:8000/categoria/categories', id).subscribe(
      (res: any) => {
        dades(res);
      });
  }

  public agafarProductes(idCategoria, dades) {
    this.http.post('http://localhost:8000/producte/productesByCategoria', idCategoria).subscribe(
      (res: any) => {
        dades(res);
      });
  }
}
