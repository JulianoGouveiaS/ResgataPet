import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

private email: string;
private senha: string;


  constructor() { }

  fazendoCadastro(email: string, senha: string){
    this.email = email;
    this.senha = senha;
  }
  
}
