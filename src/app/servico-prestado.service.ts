import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';

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

  buscar(nome: string, mes: number):Observable<ServicoPrestadoBusca[]> {
    const httpParams = new HttpParams()
          .set("nome" , nome)
          .set("mes", mes.toString());

          console.log(httpParams);


    const url = `${this.apiUrl}/servicos-prestados?${httpParams.toString()}`;
    console.log(url);

    return this.http.get<any>(url);
  }
}
