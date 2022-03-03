import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiUrl: string = environment.ApiUrl;

  constructor(
    private http: HttpClient
  ) { }

  salvarServico(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    const url = `${this.apiUrl}/servicos-prestados`;
    return this.http.post<ServicoPrestado>(url, servicoPrestado);
  }
}
