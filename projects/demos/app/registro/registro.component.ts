import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'projects/demos/app/autenticacion.service'; // Asegúrate de que la ruta de importación sea correcta

@Component({
  selector: 'mwl-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  nombreUsuario: string = '';
  contrasena: string = '';

  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {}

  onSubmit() {
    this.autenticacionService.registrarUsuario(
      this.nombreUsuario,
      this.contrasena
    );
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']); // Asegúrate de que la ruta sea la correcta
  }
}
