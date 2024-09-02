package com.exemplo.perfil_usuario.controller;

import com.exemplo.perfil_usuario.model.Usuario;
import com.exemplo.perfil_usuario.service.ImagemService;
import com.exemplo.perfil_usuario.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    ImagemService imagemService;

    @GetMapping
    public ResponseEntity<List<Usuario>> findAll() {
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable Long id) {
        return ResponseEntity.ok(usuarioService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Usuario> add(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.save(usuario));
    }

    @PutMapping
    public ResponseEntity<Usuario> update(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.save(usuario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Usuario> delete(@PathVariable Long id) {
        Usuario usuario = usuarioService.findById(id);
        usuarioService.delete(usuario);
        return ResponseEntity.ok(usuario);
    }

    @PostMapping("/{id}/upload")
    public ResponseEntity<String> uploadProfileImage(@PathVariable Long id, @RequestParam("imagem") MultipartFile imagem) {
        try {
            if (!usuarioService.uploadProfileImage(id, imagem)) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
            }
            return ResponseEntity.ok("Imagem salva com sucesso!");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar imagem");
        }
    }

    @GetMapping("/{id}/imagem-perfil")
    public ResponseEntity<byte[]> getImagemPerfil(@PathVariable Long id) {
        Usuario usuario = usuarioService.findById(id);
        if (usuario == null || usuario.getImagemPerfil() == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        String tipoImagem = imagemService.getTipoImagem(usuario.getImagemPerfil());
        if (tipoImagem == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        MediaType mediaType = MediaType.parseMediaType(tipoImagem);
        return ResponseEntity.ok().contentType(mediaType).body(usuario.getImagemPerfil());
    }

}
