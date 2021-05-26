import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../api.service";
import {Socket} from "ngx-socket-io";
import {Taula} from "../../models/taula.model";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public taules: Taula[];
  constructor(public router: Router,public api: ApiService, private socket: Socket) {}

  public submit(id){
    localStorage.setItem("taulaActual",id);
    this.router.navigate(['categories']);
  }

  public prova(){
    var order = {id:"123",products:"1",message:"caca"};
    this.socket.connect();
    this.socket.emit('set-order', order);
  }

  ngOnInit() {
    localStorage.removeItem("taulaActual");
    if (window.localStorage.getItem('sessio') == null || window.localStorage.getItem('sessio') == "0"){
      this.router.navigate(['login']);
    }

    var array = {"bar": JSON.parse(window.localStorage.getItem('id'))};
    this.api.agafarTaules(array, res => {
      console.log(res);
      this.taules = res;
    })
  }
}
