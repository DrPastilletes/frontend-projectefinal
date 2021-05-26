import {Categoria} from "./categoria.model";

export interface Producte {
  id:number;
  nom:string;
  preu:number;
  disponible:boolean;
  categoria:Categoria;
  icon:string;
}
