import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  standalone: false
})
export class EventosPage {
  eventos: any[] = [];

  constructor(private storage: Storage, private router: Router) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.eventos = (await this.storage.get('eventos')) || [];
    console.log('Eventos carregados:', this.eventos);
  }

  async eliminarEvento(id: number) {
    const eventos = await this.storage.get('eventos');
    const atualizados = eventos.filter((e: any) => e.id !== id);
    await this.storage.set('eventos', atualizados);
    this.eventos = atualizados;
  }

  abrirDetalhes(id: number) {
    this.router.navigate(['/evento-detalhes', id]);
  }
}
