import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Usuario = {}

  usuario?: string;
  senha?: string;
  mensagemErro: boolean = false;
  cadastrando?: boolean;

  constructor(
    private authService: AuthService
  ) { }

  onSubmit() {
    console.log(`User: ${this.usuario}, Pass: ${this.senha}`);
  }

  preparaCadastro(event: any) {
    event.preventDefault();
    this.cadastrando= true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  cadastrar() {
    this.user.username = this.usuario;
    this.user.password = this.senha;
    this.authService.salvar(this.user)
      .subscribe(response => {
        console.log(this.user);

      })
  }

}
