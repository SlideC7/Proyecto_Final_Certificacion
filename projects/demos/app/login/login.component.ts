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

  constructor(private router: Router) {}

  onSubmit() {
    if (
      this.nombreUsuario === 'usuarioCorrecto' &&
      this.contrasena === 'contraseñaCorrecta'
    ) {
      this.router.navigate(['/kitchen-sink']);
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos';
      this.contrasena = ''; // Resetear la contraseña
    }
  }
}
