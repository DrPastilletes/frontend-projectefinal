import { Query } from '@datorama/akita';
import { ComandaStore } from './comanda.store';
import {Comanda} from "../../models/comanda.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})
export class ComandaQuery extends Query<Comanda> {
  constructor(protected store: ComandaStore) {
    super(store);
  }
}
