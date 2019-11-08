import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/classes/Usuario';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage implements OnInit {

  user: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.user = params['model'];
      console.log(this.user);
    });
  }


  ngOnInit() {
  }

}
