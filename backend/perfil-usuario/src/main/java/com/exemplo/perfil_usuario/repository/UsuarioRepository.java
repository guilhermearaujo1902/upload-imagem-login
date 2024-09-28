package com.exemplo.perfil_usuario.repository;

import com.exemplo.perfil_usuario.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query(value = "select * from usuario where email like :EMAIL and senha like :SENHA",
            nativeQuery = true)
    public Usuario validarLogin(@Param("EMAIL") String email, @Param("SENHA") String senha);

}
