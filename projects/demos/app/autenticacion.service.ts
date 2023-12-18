import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs'; // Importa bcryptjs

interface Usuario {
  id: string;
  nombreUsuario: string;
  hashContrasena: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private usuarios: Usuario[] = [];

  constructor() {}

  registrarUsuario(nombreUsuario: string, contraseña: string): void {
    const saltRounds = 10; // Número de rondas de sal para bcrypt

    // Hashea la contraseña con bcrypt (bcrypt generará su propio salt)
    const hashContrasena = bcrypt.hashSync(contraseña, saltRounds);

    // Crea un nuevo usuario y almacénalo en la lista de usuarios
    const nuevoUsuario: Usuario = {
      id: uuidv4(),
      nombreUsuario,
      hashContrasena,
    };

    this.usuarios.push(nuevoUsuario);
  }

  autenticar(nombreUsuario: string, contraseña: string): boolean {
    const usuario = this.usuarios.find(
      (u) => u.nombreUsuario === nombreUsuario
    );

    if (!usuario) {
      return false; // El usuario no existe
    }

    // Verifica si la contraseña proporcionada coincide con el hash almacenado utilizando bcrypt
    return bcrypt.compareSync(contraseña, usuario.hashContrasena);
  }
}
