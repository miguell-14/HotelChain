import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private storage: Storage,
    private router: Router
  ) {}

  async ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    const eventos = await this.storage.get('eventos');
    this.evento = eventos.find((e: any) => e.id == id);
  }

  async editarEvento() {
    await this.storage.set('evento_edicao', this.evento);
    this.router.navigate(['/criar-evento'], {
    state: { evento: this.evento }
  });
  }

  async eliminarEvento() {
    const confirmar = confirm('Tem a certeza que deseja eliminar este evento?');
    if (!confirmar) return;

    const eventos = await this.storage.get('eventos');
    const atualizados = eventos.filter((e: any) => e.id !== this.evento.id);
    await this.storage.set('eventos', atualizados);
    this.router.navigateByUrl('/eventos');
  }
}
