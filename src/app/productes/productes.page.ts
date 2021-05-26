import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Producte} from "../../models/producte.model";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-productes',
  templateUrl: './productes.page.html',
  styleUrls: ['./productes.page.scss'],
})
export class ProductesPage implements OnInit {
  public idCategoria: string;
  public productes: Producte[];
  public nomCategoria: string;

  constructor(private formBuilder: FormBuilder,public api: ApiService, public router: Router, private activatedRoute: ActivatedRoute) {
  }
  afegirProductes(id){
    console.log(id);
    if(localStorage.getItem("productes-"+localStorage.getItem("taulaActual")) == null){
      localStorage.setItem("productes-"+localStorage.getItem("taulaActual"),id);
    }else {
      let storage =localStorage.getItem("productes-"+localStorage.getItem("taulaActual"));
      localStorage.setItem("productes-"+localStorage.getItem("taulaActual"),storage+","+id);
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        this.idCategoria = params.idCategoria;
        this.nomCategoria = params.nomCategoria;
      }
    });
    var array = {"bar": JSON.parse(window.localStorage.getItem('id')), "categoria": this.idCategoria};
    this.api.agafarProductes(array, res => {
      this.productes = res;
      console.log(this.productes);
      for (let i = 0; i < this.productes.length; i++) {
        if(this.nomCategoria == "Cafe"){
          this.productes[i]["icon"] = "assets/icon/coffee-cup.svg";
        }else if(this.nomCategoria == "Entrepa Fred" || this.nomCategoria == "Entrepa Calent"){
          this.productes[i]["icon"] = "assets/icon/sandwich.svg";
        }else if(this.nomCategoria == "Cervesa"){
          this.productes[i]["icon"] = "assets/icon/beer.svg";
        }else if(this.nomCategoria == "Aperitiu"){
          this.productes[i]["icon"] = "assets/icon/olives.svg";
        }else if(this.nomCategoria == "Alcohol"){
          this.productes[i]["icon"] = "assets/icon/gin-tonic.svg";
        }else if(this.nomCategoria == "Gelats"){
          this.productes[i]["icon"] = "assets/icon/ice-cream.svg";
        }else if(this.nomCategoria == "Postre"){
          this.productes[i]["icon"] = "assets/icon/yogurt.svg";
        }else{
          this.productes[i]["icon"] = "assets/icon/fork.svg";
        }
      }
    })


  }

}
