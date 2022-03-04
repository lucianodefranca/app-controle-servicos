import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario?: string;
  senha?: string;
  mensagemErro?: boolean;

  constructor() { }

  onSubmit() {
    console.log(`User: ${this.usuario}, Pass: ${this.senha}`);

  }

}
