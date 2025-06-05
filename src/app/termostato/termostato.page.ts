import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termostato',
  templateUrl: './termostato.page.html',
  styleUrls: ['./termostato.page.scss'],
  standalone: false
})
export class TermostatoPage {
  zonaSelecionada: string = '';
  andarSelecionado: string = '';
  subzonas: string[] = [];

  zonas: string[] = ['Dormitório', 'Áreas Comuns', 'Restauração', 'Salas Eventos'];
  andares: string[] = ['Piso 1', 'Piso 2', 'Piso 3', 'Piso 4'];

  constructor(private router: Router) {}

  onZonaSelecionada() {
    this.subzonas = [];
    this.andarSelecionado = '';

    if (this.zonaSelecionada !== 'Dormitório') {
      this.definirSubzonasPorZona();
    }
  }

  onAndarSelecionado() {
    if (this.zonaSelecionada === 'Dormitório') {
      this.definirQuartosPorAndar();
    }
  }

  definirSubzonasPorZona() {
    switch (this.zonaSelecionada) {
      case 'Áreas Comuns':
        this.subzonas = ['Entrada', 'Corredores', 'Sala Espera', 'WC'];
        break;
      case 'Restauração':
        this.subzonas = ['Cozinha', 'Refeitório', 'Despensa', 'Bar'];
        break;
      case 'Salas Eventos':
        this.subzonas = ['Sala 1', 'Sala 2', 'Auditório 1', 'Auditório 2'];
        break;
      default:
        this.subzonas = [];
    }
  }

  definirQuartosPorAndar() {
    const mapaQuartos: any = {
      'Piso 1': ['Quarto 101', 'Quarto 102', 'Quarto 103', 'Quarto 104'],
      'Piso 2': ['Quarto 201', 'Quarto 202', 'Quarto 203', 'Quarto 204'],
      'Piso 3': ['Quarto 301', 'Quarto 302', 'Quarto 303', 'Quarto 304'],
      'Piso 4': ['Quarto 401', 'Quarto 402', 'Quarto 403', 'Quarto 404'],
    };
    this.subzonas = mapaQuartos[this.andarSelecionado] || [];
  }

  abrirControloTemperatura(subzona: string) {
    this.router.navigate(['/controlo-temperatura'], {
      state: { subzona }
    });
  }
}
