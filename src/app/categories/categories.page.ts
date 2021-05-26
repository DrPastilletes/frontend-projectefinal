import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {NavigationExtras, Router} from "@angular/router";
import {Categoria} from "../../models/categoria.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public categories: Categoria[];
  constructor(public api: ApiService, public router: Router) {
    this.categories = [];
  }
  anarComanda(){
    this.router.navigate(["comanda"]);
  }


  public goPage(page,idCategoria,nomCategoria){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        idCategoria:idCategoria,
        nomCategoria:nomCategoria
      }
    };

    this.router.navigate([page], navigationExtras);
  }

  ngOnInit() {
    if (window.localStorage.getItem('sessio') == null || window.localStorage.getItem('sessio') == "0") {
      this.router.navigate(['login']);
    }
    var bar = {"bar": JSON.parse(window.localStorage.getItem('id'))};
    console.log(bar);
    this.api.agafarCategories(bar, res => {
      this.categories = res;
    })
  }

}
