import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  listaClientes: Cliente[] = [];

  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.listaClientes = this.service.getCliente();
  }

}
