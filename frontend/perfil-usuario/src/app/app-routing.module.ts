import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './components/usuario/perfil-usuario/perfil-usuario.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { UsuarioLoginComponent } from './components/usuario/usuario-login/usuario-login.component';

const routes: Routes = [
  {path: 'perfil', component: PerfilUsuarioComponent},
  {path: 'usuario-cadastro', component: UsuarioFormComponent},
  {path: 'login', component: UsuarioLoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
