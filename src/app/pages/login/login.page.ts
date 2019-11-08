import { Component, OnInit, Injectable } from '@angular/core';
import { Usuario } from 'src/app/classes/Usuario';
import { LojaPage } from '../loja/loja.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class LoginPage implements OnInit {
  model: Usuario = new Usuario();

  constructor(public navCtrl: NavController, private router: Router, public http: HttpClient) {
  }

  async login() {
    const url = 'http://localhost:8080/usuario/all';
    const reqOpts = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    this.http.get(url, reqOpts).subscribe(data => {
      const obj = (data as any);
      console.log(obj);
    }, error => {
      console.log(error)
    }
    )


  }

  ngOnInit() {
  }

}
