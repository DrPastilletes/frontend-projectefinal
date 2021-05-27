import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Producte} from "../../models/producte.model";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
})
export class ComandaPage implements OnInit {

  comandaForm = this.formBuilder.group({
    observacions: ['']
  })
  public arrayProductes: Producte[];
  public arrayOrdenats: any[];

  constructor(private formBuilder: FormBuilder, public api: ApiService) {
    this.arrayProductes = []
    this.arrayOrdenats = []
  }

  ngOnInit() {
    let productes = localStorage.getItem("productes-" + localStorage.getItem("taulaActual"));

    if (productes != null) {
      let array = productes.split(",");
      for (let i = 0; i < array.length; i++) {
        if ((this.arrayOrdenats)[array[i].toString()] == undefined) {
          (this.arrayOrdenats)[array[i].toString()] = 1;
          this.api.agafarProductePerId({"idProducte": parseInt(array[i])}, res => {
            this.arrayProductes.push(res[0]);
          })
        } else {
          (this.arrayOrdenats)[array[i].toString()] += 1;
        }
      }
    }
  }

  enviar() {
    let arrayProdFinal = [];
    let preuTotal = 0.0;
    for (let i = 0; i < this.arrayProductes.length; i++) {
      for (let j = 0; j < this.arrayOrdenats[this.arrayProductes[i]["id"]]; j++) {
        arrayProdFinal.push(this.arrayProductes[i]);
        preuTotal += this.arrayProductes[i]["preu"];
      }
    }
    let comanda = {
      taula: localStorage.getItem("taulaActual"),
      productes: arrayProdFinal,
      acabat: false,
      comentari: this.comandaForm.get("observacions").value
    };
  }
}
