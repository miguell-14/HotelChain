import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  standalone: false
})
export class EventosPage {
  eventos: any[] = [];

  constructor(private storage: Storage) {}

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
  

  
}
