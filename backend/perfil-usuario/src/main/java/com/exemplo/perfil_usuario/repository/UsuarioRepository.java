package com.exemplo.perfil_usuario.repository;

import com.exemplo.perfil_usuario.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
