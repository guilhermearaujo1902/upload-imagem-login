import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  uploadProfileImage(userId: number, imagem: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imagem', imagem);

    return this.http.post(`${this.baseUrl}/${userId}/upload`, formData, { responseType: 'text' });
  }

  getProfileImage(userId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${userId}/imagem-perfil`, { responseType: 'blob' });
  }
}
