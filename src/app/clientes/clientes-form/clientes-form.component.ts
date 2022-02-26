import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  id_tec = '';

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    dataCadastro: ''
  };

  success: boolean = false;
  errors: string[] = [];

  constructor(
    private service : ClientesService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.buscarPorId();
  }

  salvarCliente(): void {
    this.service.salvar(this.cliente).subscribe(response => {
      this.success = true;
      this.router.navigate(['clientes-lista'])

    }, erroResponse => {
      this.errors.push(JSON.stringify(erroResponse.error.errors));
    });
  }

  atualizar(): void {
    this.service.atualizarCliente(this.cliente).subscribe(response => {
      this.router.navigate(['clientes-lista'])

    }, err => {
      console.log(err.error.errors);

    })
  }

  voltar() {
    this.router.navigate(['clientes-lista'])
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.id_tec).subscribe(response => {
      this.cliente = response;
    })
  }

}
