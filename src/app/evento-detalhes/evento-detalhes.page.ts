import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-evento-detalhes',
  templateUrl: './evento-detalhes.page.html',
  styleUrls: ['./evento-detalhes.page.scss'],
  standalone: false
})
export class EventoDetalhesPage {
  evento: any = null;

  constructor(
    private route: ActivatedRoute,
    private storage: Storage
  ) {}

  async ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    const eventos = await this.storage.get('eventos');
    this.evento = eventos.find((e: any) => e.id == id);
  }
}
