import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';
import { Usuario } from 'src/app/classes/Usuario';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  model = new Usuario();

  constructor(private myService: ExampleService, public http: HttpClient) {

  }

  async cadastrarUser() {

    
    if (this.model) {
    
    const body: Usuario = {
      "login": this.model.login,
      "nome": this.model.nome,
      "telefone": this.model.telefone,
      "email": this.model.email,
      "senha": this.model.senha
    };

      const url = 'http://localhost:8080/usuario/add';
      const reqOpts = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
        }
      };

      this.http.post(url,body, reqOpts).subscribe(data => {
        const obj = (data as any);
        console.log(obj);
      }, error => {
        console.log(error)
      }
      )
    }

  }

  ngOnInit() {
  }

}
