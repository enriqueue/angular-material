import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  LISTA_USUARIOS: Usuario[] = [
    {usuario: 'user 1', nombre: 'user 1', apellido: 'test 1', sexo: 'Masculino'},
    {usuario: 'user 2', nombre: 'user 2', apellido: 'test 2', sexo: 'Masculino'},
    {usuario: 'user 3', nombre: 'user 3', apellido: 'test 3', sexo: 'Femenino'},
    {usuario: 'user 4', nombre: 'user 4', apellido: 'test 4', sexo: 'Femenino'},
    {usuario: 'user 5', nombre: 'user 5', apellido: 'test 5', sexo: 'Masculino'},
  ];

  constructor() { }

  getUsuarios() {
    return this.LISTA_USUARIOS.slice();
  }
  
  agregarUsuario(usuario: Usuario) {
    this.LISTA_USUARIOS.unshift(usuario);
  }

  eliminarUsuario(index: number) {
    this.LISTA_USUARIOS.splice(index, 1);
  }

}