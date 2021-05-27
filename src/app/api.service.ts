import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Taula} from "../models/taula.model";
import {Categoria} from "../models/categoria.model";
import {Producte} from "../models/producte.model";


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
      (res: Categoria[]) => {
        dades(res);
      });
  }

  public agafarTaules(id, dades) {
    this.http.post('http://localhost:8000/taula/taules', id).subscribe(
      (res: Taula[]) => {
        dades(res);
      });
  }

  public agafarProductes(idCategoria, dades) {
    this.http.post('http://localhost:8000/producte/productesByCategoria', idCategoria).subscribe(
      (res: Producte[]) => {
        dades(res);
      });
  }
  public agafarProductePerId(idProducte, dades) {
    this.http.post('http://localhost:8000/producte/productesById', idProducte).subscribe(
      (res: Producte[]) => {
        dades(res);
      });
  }
}
