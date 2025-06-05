import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: false
})
export class AppComponent {
  constructor(private router: Router, private menu: MenuController) {}

  async navegar(destino: string) {
    await this.menu.close();           // Fecha o menu
    this.router.navigate([destino]);   // Navega para a página
  }

  async logout() {
    await this.menu.close();
    // Aqui podes apagar dados de login se tiveres
    this.router.navigate(['/login']);
  }
}
