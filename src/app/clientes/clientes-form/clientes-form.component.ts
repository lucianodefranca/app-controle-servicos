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
    ) {
    this.cliente = new Cliente;
   }

  ngOnInit(): void {
    let params = this.route.snapshot.params
    if(params && params.value && params.value.id) {
      let id = params.value.id;
      this.service.AtualizarCliente(this.cliente.id).subscribe(res => {
        this.cliente = res
      })
    }
  }

  atualizar(): void {

  }

  onSubmit() {
    this.service.salvar(this.cliente).subscribe(response => {
      this.success = true;

    }, erroResponse => {
      this.errors.push(JSON.stringify(erroResponse.error.errors));
    });
  }

  voltar() {
    this.router.navigate(['clientes-lista'])
  }

}
