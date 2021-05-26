import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
})
export class ComandaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    let productes = localStorage.getItem("productes-"+localStorage.getItem("taulaActual"));

    if(productes != null){
      let array = productes.split(",");
      let arrayOrdenats = [];
      for (let i = 0; i < array.length; i++) {
        arrayOrdenats.push({""})
      }
    }
  }

}
