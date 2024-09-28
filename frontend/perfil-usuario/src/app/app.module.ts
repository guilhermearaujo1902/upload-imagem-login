import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilUsuarioComponent } from './components/usuario/perfil-usuario/perfil-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { UsuarioLoginComponent } from './components/usuario/usuario-login/usuario-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuarioComponent,
    UsuarioFormComponent,
    UsuarioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
