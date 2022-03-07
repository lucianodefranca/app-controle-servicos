import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.ApiUrl;

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}/usuarios`;
    return this.http.post<any>(url, usuario);
  }

}
