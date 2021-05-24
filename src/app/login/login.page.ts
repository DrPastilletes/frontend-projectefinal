import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AlertController} from '@ionic/angular';
import {Router} from "@angular/router";
import {ApiService} from "../api.service";





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = this.formBuilder.group({
    usuari: [''],
    contra: ['']
  });

  constructor(private formBuilder: FormBuilder, public httpClient: HttpClient, public alertController: AlertController, public router: Router, public api:ApiService) {
  }

  async sendPostRequest () {
    this.api.ferLogin(this.loginForm,async res=>{
      if(res.sessio === 0){
        window.localStorage.setItem("sessio", res.sessio);
        const alert = await this.alertController.create({
          header: 'Login Incorrecte',
          message: "L'usuari o la contrasenya son incorrectes",
          buttons: [{
            text: "Okay",
            role: 'cancel',
            cssClass: 'alert-cancel',
            handler: () => {
            }
          }]
        });
        return await alert.present();
      }else{
        window.localStorage.setItem("sessio", res.sessio);
        window.localStorage.setItem("id", res.id);
        window.localStorage.setItem("nom", res.nom);
        await this.router.navigate(['home']);
      }
    })

  }


  public submit() {
    console.log(this.loginForm);
    this.sendPostRequest();
  }

  ngOnInit() {
  }

}
