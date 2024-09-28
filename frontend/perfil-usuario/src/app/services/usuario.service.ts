import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  add(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadProfileImage(userId: number, imagem: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imagem', imagem);

    return this.http.post(`${this.apiUrl}/${userId}/upload`, formData, { responseType: 'text' });
  }

  getProfileImage(userId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${userId}/imagem-perfil`, { responseType: 'blob' });
  }

  validarLogin(credenciais: any): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, credenciais);
  }
}
