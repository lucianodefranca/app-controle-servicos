import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  listaClientes: Cliente[] = [];

  clienteSelecionado: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    dataCadastro: ''
  };

  mensagemSuccesso: String = '';
  mensagemErro: String = '';

  constructor(
    private service: ClientesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() {
    this.service.clientesLista().subscribe(response =>{
      this.listaClientes = response;
    })
  }

  novoCadastro() {
    this.router.navigate(['clientes/form']);
  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletar() {
    this.service.deletarCliente(this.clienteSelecionado).subscribe(response => {
      this.ngOnInit()
      this.mensagemSuccesso = "Cliente deletado com sucesso"
    }, erro => {
      this.mensagemErro = "Erro ao deletar cliente!"
    })

  }

}
