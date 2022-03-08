import { Router } from '@angular/router';
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
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    this.authService.tentarLogar(this.usuario!, this.senha!)
      .subscribe(response => {

        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token);

        this.router.navigate(['/home']);
      })
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
        this.cadastrando = false;
        this.usuario = '',
        this.senha = ''
      })
  }

}
