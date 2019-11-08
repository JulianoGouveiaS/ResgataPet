import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';
import { Usuario } from 'src/app/classes/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

 model = new Usuario();

  constructor(private myService: ExampleService){
    
  }

  cadastros(){
    this.myService.fazendoCadastro('vitor@gmail.com', '12345');
  }
  ngOnInit() {
  }

}
