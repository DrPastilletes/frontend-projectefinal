import {Store, StoreConfig} from "@datorama/akita";
import {Comanda, initComanda} from "../../models/comanda.model";
import {Injectable} from "@angular/core";

export function createInitialState():Comanda {
  return new initComanda();
}
@Injectable({providedIn:"root"})
@StoreConfig({ name: 'comanda' , resettable: true})
export class ComandaStore extends Store<Comanda> {
  constructor() {
    super(createInitialState());
  }
}
