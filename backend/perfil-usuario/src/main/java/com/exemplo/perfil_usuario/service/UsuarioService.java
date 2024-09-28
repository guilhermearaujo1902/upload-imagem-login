package com.exemplo.perfil_usuario.service;

import com.exemplo.perfil_usuario.model.Usuario;
import com.exemplo.perfil_usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public Usuario findById(Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    public Usuario save(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public void delete(Usuario usuario) {
        usuarioRepository.delete(usuario);
    }

    public boolean uploadProfileImage(Long id, MultipartFile imagem) throws IOException {
        Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
        if (usuarioOptional.isEmpty()) {
            return false;
        }

        Usuario usuario = usuarioOptional.get();
        usuario.setImagemPerfil(imagem.getBytes());
        usuarioRepository.save(usuario);
        return true;
    }

    public Usuario validarLogin(String email, String senha){
        return usuarioRepository.validarLogin(email, senha);
    }

}
