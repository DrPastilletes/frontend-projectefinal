import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-productes',
  templateUrl: './productes.page.html',
  styleUrls: ['./productes.page.scss'],
})
export class ProductesPage implements OnInit {
  public idCategoria: string;
  public productes: any;
  public nomCategoria: string;

  constructor(public api: ApiService, public router: Router, private activatedRoute: ActivatedRoute) {
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
