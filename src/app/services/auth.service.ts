import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';  // Importando o operador tap
import { User } from '../models/User';
import { AuthResponse } from '../models/AuthResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient) { }

  Register(user: User) : Observable<User>{
    return this.http.post<User>(`${this.ApiUrl}/auth/register`, user);
  }

  Login(email: string, password: string): Observable<AuthResponse> {
    const loginPayload = { email, password };
    return this.http.post<AuthResponse>(`${this.ApiUrl}/auth/login`, loginPayload)
      // .pipe(
      //   tap((response: AuthResponse) => {
      //     if (typeof window !== 'undefined') {
      //       // Verifique se está no cliente antes de acessar localStorage
      //       localStorage.setItem('jwtToken', response.token);
      //     }
      //   })
      // );
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      // Verifique se está no cliente antes de acessar localStorage
      return localStorage.getItem('jwtToken') !== null;
    }
    return false;  // Caso esteja no servidor, não está logado
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      // Verifique se está no cliente antes de acessar localStorage
      localStorage.removeItem('jwtToken');
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      // Verifique se está no cliente antes de acessar localStorage
      return localStorage.getItem('jwtToken');
    }
    return null;  // Caso esteja no servidor
  }
}
