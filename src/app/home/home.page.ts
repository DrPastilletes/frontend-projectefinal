import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  public submit(){
    this.router.navigate(['categories']);
  }

  ngOnInit() {
    if (window.localStorage.getItem('sessio') == null || window.localStorage.getItem('sessio') == "0"){
      this.router.navigate(['login']);
    }
  }
}
