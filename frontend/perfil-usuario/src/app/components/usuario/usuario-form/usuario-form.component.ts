import { Component } from '@angular/core';
import { Usuario } from '../../../interfaces/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent {

  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    imagemPerfil: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ){}

  salvar() {
    this.usuarioService.add(this.usuario).subscribe(() =>{
      this.router.navigate(['/login']);
    });
  }

}
