import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone : false
})
export class LoginPage {
  user: string = '';
  password: string = '';

  constructor(private router: Router) {}
  

  login() {
    const validuser = 'Miguel';
    const validPassword = '123';

    if (this.user === validuser && this.password === validPassword) {
      this.router.navigate(['/home']);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
}
