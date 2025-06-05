import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.page.html',
  styleUrls: ['./criar-evento.page.scss'],
  standalone: false
})
export class CriarEventoPage {
  evento: any = {};
  etapaAtual = 1;

  constructor(private storage: Storage, private router: Router) {
    this.storage.create();
  }

  proximaEtapa() {
    this.etapaAtual++;
  }

  async guardarEvento() {
    const eventos = (await this.storage.get('eventos')) || [];

    const novoEvento = {
      ...this.evento,
      id: new Date().getTime(),
      data: this.evento.dataHora?.split('T')[0] ?? ''
    };

    eventos.push(novoEvento);
    await this.storage.set('eventos', eventos);

    this.router.navigateByUrl('/eventos');
  }
}
