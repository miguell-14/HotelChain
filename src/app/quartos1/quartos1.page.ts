import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quartos1',
  templateUrl: './quartos1.page.html',
  styleUrls: ['./quartos1.page.scss'],
    standalone: false
})
export class Quartos1Page implements OnInit {

  andarSelecionado = '1';
  quartos: any[] = [];

  constructor(
    private router: Router,
    private storage: Storage,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    await this.storage.create();

    const quartosGuardados = await this.storage.get('quartos');

    if (quartosGuardados && Array.isArray(quartosGuardados)) {
      this.quartos = quartosGuardados;
    } else {
      // Se não houver quartos na storage, importar do JSON
      this.http.get<any[]>('/assets/quartos.json').subscribe({
        next: async (dados) => {
          this.quartos = dados;
          await this.storage.set('quartos', dados);
        },
        error: (err) => {
          console.error('Erro ao importar quartos.json:', err);
        }
      });
    }
  }

  quartosFiltrados() {
    return this.quartos.filter(q => q.andar === this.andarSelecionado);
  }

  abrirAlterarQuartos(quarto: any) {
    this.router.navigate(['/alterar-quartos', quarto.id]);
  }

  ionViewWillEnter() {
    this.atualizarQuartos();
  }

  async atualizarQuartos() {
    const quartosGuardados = await this.storage.get('quartos');
    if (quartosGuardados && Array.isArray(quartosGuardados)) {
      this.quartos = quartosGuardados;
    }
  }
}