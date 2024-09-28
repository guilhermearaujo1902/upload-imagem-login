import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../interfaces/Usuario';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrl: './usuario-login.component.scss'
})
export class UsuarioLoginComponent {

  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    imagemPerfil: ''
  };

  erroLogin: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ){}

  realizarLogin() {
    const credenciais = {
      EMAIL: this.usuario.email,
      SENHA: this.usuario.senha
    };
    this.usuarioService.validarLogin(credenciais).subscribe( usuarioValido =>{
      if (usuarioValido) {
        this.salvarSessao(usuarioValido);
        this.router.navigate(['/perfil']);
      } else {
        this.erroLogin = true;
      }
    });
  }

  salvarSessao(usuario: Usuario) {
    sessionStorage.setItem('usuario-id', usuario.id.toString());
    sessionStorage.setItem('usuario-nome', usuario.nome);
    sessionStorage.setItem('usuario-email', usuario.email);
  }

}
