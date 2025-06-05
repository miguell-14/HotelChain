import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  userName: string = 'Gestor';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['name']) {
      this.userName = nav.extras.state['name'];
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
