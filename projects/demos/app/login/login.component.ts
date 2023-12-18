import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mwl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  nombreUsuario: string = '';
  contrasena: string = '';
  mensajeError: string = '';

  // Lista de usuarios permitidos
  usuariosPermitidos = [
    { usuario: 'noah', contrasena: '123123' },
    { usuario: 'deby', contrasena: '123' },
  ];

  constructor(private router: Router) {}

  onSubmit() {
    // Verificar si las credenciales coinciden con la lista de usuarios permitidos
    const usuarioEncontrado = this.usuariosPermitidos.find(
      (user) =>
        user.usuario === this.nombreUsuario &&
        user.contrasena === this.contrasena
    );

    if (usuarioEncontrado) {
      this.router.navigate(['/kitchen-sink']);
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos';
    }
  }
}
