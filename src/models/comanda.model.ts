import {Taula} from "./taula.model";
import {Producte} from "./producte.model";
import {EntityState} from "@datorama/akita";

export interface Comanda{
  id:number;
  taula:Taula;
  productes:Producte[];
  acabat:boolean;
  horaAcabat:Date;
  preuTotal:number;
  comentari:string;
  bar:number
}



