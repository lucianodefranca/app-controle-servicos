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

  clientesLista(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(baseUrl);
  }
}
