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

  buscarPorId(id : any): Observable<Cliente> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  salvar(cliente : Cliente): Observable<Cliente> {
    const url = `${baseUrl}`;
    return this.http.post<Cliente>(url, cliente);
  }

  clientesLista(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(baseUrl);
  }

  atualizarCliente(cliente : Cliente): Observable<Cliente> {
    const url = `${baseUrl}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  deletarCliente(cliente : Cliente): Observable<any> {
    const url = `${baseUrl}/${cliente.id}`;
    return this.http.delete<any>(url);
  }
}
