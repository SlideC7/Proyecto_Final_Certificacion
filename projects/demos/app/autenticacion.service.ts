import { Injectable } from '@angular/core';

interface Usuario {
  nombreUsuario: string;
  contraseña: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private usuarios: Usuario[] = [];

  constructor() {}

  registrarUsuario(nombreUsuario: string, contraseña: string): void {
    this.usuarios.push({ nombreUsuario, contraseña });
  }

  autenticar(nombreUsuario: string, contraseña: string): boolean {
    return this.usuarios.some(
      (usuario) =>
        usuario.nombreUsuario === nombreUsuario &&
        usuario.contraseña === contraseña
    );
  }
}
