import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { environment } from './../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.ApiUrl;
  tokenURL: string = environment.ApiUrl + environment.UrlToken;
  clientId: string = environment.ClienteID;
  clientSecret: string = environment.ClienteSecret;

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}/usuarios`;
    return this.http.post<any>(url, usuario);
  }

  tentarLogar( username: string, password: string ): Observable<any> {
    const params = new HttpParams()
                    .set('username', username)
                    .set('password', password)
                    .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(this.tokenURL, params, { headers });
  }
}
