import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente : Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(baseUrl, cliente)
  }

  //clientesLista(): Observable<Cliente[]> {
  //}

  getCliente():Cliente[] {
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = "Luciano";
    cliente.cpf = "05207381954";
    cliente.dataCadastro = "20/05/20210";
    return [cliente];
  }

}
