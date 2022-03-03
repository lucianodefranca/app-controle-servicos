import { Router } from '@angular/router';
import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado = {};

  constructor(
    private clientesService: ClientesService,
    private service: ServicoPrestadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clientesService.clientesLista().subscribe(response => {
      this.clientes = response;
    })
  }

  onSubmit() {
    this.service.salvarServico(this.servico).subscribe(response => {

    })

  }

}
