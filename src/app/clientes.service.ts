import { environment } from './../environments/environment';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl: string = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  buscarPorId(id : any): Observable<Cliente> {
    const url = `${this.apiUrl}/clientes/${id}`;
    return this.http.get<Cliente>(url);
  }

  salvar(cliente : Cliente): Observable<Cliente> {
    const url = `${this.apiUrl}/clientes`;
    return this.http.post<Cliente>(url, cliente);
  }

  clientesLista(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/clientes`);
  }

  atualizarCliente(cliente : Cliente): Observable<Cliente> {
    const url = `${this.apiUrl}/clientes/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  deletarCliente(cliente : Cliente): Observable<any> {
    const url = `${this.apiUrl}/clientes/${cliente.id}`;
    return this.http.delete<any>(url);
  }
}
