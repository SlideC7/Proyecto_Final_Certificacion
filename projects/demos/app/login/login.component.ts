import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mwl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí deberías verificar las credenciales ingresadas
    // y autenticar al usuario. Por ahora, simplemente redireccionaremos al dashboard.
    this.router.navigate(['/kitchen-sink']);
  }
}
