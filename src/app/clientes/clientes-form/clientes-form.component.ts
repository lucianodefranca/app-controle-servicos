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

  constructor(private service : ClientesService) {
    this.cliente = new Cliente;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.salvar(this.cliente).subscribe(response => {
      this.success = true;

    }, erroResponse => {
      this.errors.push(JSON.stringify(erroResponse.error.errors));
    });

  }

}
