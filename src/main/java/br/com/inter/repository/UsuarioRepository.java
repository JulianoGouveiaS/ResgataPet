package br.com.inter.repository;

import org.springframework.data.repository.CrudRepository;
import br.com.inter.entity.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {

}
