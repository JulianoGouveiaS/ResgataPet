package br.com.inter.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.inter.entity.Usuario;
import br.com.inter.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	UsuarioRepository usuarioRepository;

	// insert new usuario into database
	@PostMapping("/add")
	@CrossOrigin()
	public Usuario addUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

	// fetch all usuario list from database
	@GetMapping("/all")
	@CrossOrigin()
	public Iterable<Usuario> allUsuario() {
		return usuarioRepository.findAll();
	}

	// fetch specific usuario by their ID
	@GetMapping("/{usuarioId}")
	@CrossOrigin()
	public Optional<Usuario> usuarioById(@PathVariable("usuarioId") int usuarioId) {
		return usuarioRepository.findById(usuarioId);
	}

	// update existing usuario
	@PutMapping("/update")
	@CrossOrigin()
	public Usuario updateUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

	// delete usuario from database
	@DeleteMapping("/{usuarioId}")
	@CrossOrigin()
	public void deleteUsuario(@PathVariable("usuarioId") int usuarioId) {

		usuarioRepository.deleteById(usuarioId);
	}
}
