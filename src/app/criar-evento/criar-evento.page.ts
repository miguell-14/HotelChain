import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.page.html',
  styleUrls: ['./criar-evento.page.scss'],
  standalone: false
})
export class CriarEventoPage {

  evento: any = {
    id: null,
    nome: '',
    dataHora: '',
    local: '',
    tipo: '',
    publicoAlvo: '',
    descricao: ''
  };

  etapaAtual = 1;
  camposInvalidos = false;
  isEdicao = false;
  dataAtual: string = new Date().toISOString().split('T')[0];

  constructor(
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.storage.create();

    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { [key: string]: any };

    if (state && state['evento']) {
      this.evento = { ...state['evento'] };
      this.isEdicao = true;
    }
  }

  // ⚡ Método que é chamado sempre que a página vai ser exibida
  async ionViewWillEnter() {
    const eventoGuardado = await this.storage.get('evento_edicao');
    if (eventoGuardado) {
      this.evento = { ...eventoGuardado };
      this.isEdicao = true;
      await this.storage.remove('evento_edicao');
    }
  }

  proximaEtapa() {
    if (!this.evento.nome || !this.evento.local || !this.evento.tipo || !this.evento.publicoAlvo) {
      this.camposInvalidos = true;
      alert('Por favor, preencha todos os campos obrigatórios: nome, local, tipo e público-alvo.');
      return;
    }

    this.camposInvalidos = false;
    this.etapaAtual++;
  }

  voltarEtapa() {
    if (this.etapaAtual > 1) this.etapaAtual--;
  }

  cancelar() {
    const confirmacao = confirm('Deseja mesmo cancelar? Todas as alterações serão perdidas.');
    if (confirmacao) {
      this.router.navigateByUrl('/eventos');
    }
  }

  async guardarEvento() {
    const confirmacao = confirm('Deseja mesmo guardar este evento?');
    if (!confirmacao) return;

    const eventos = (await this.storage.get('eventos')) || [];

    if (this.isEdicao) {
      // Atualiza evento existente
      const atualizados = eventos.map((e: any) => {
        if (e.id === this.evento.id) {
          return { ...this.evento, data: this.evento.dataHora?.split('T')[0] ?? '' };
        }
        return e;
      });
      await this.storage.set('eventos', atualizados);
    } else {
      // Cria novo evento
      const novoEvento = {
        ...this.evento,
        id: new Date().getTime(),
        data: this.evento.dataHora?.split('T')[0] ?? ''
      };
      eventos.push(novoEvento);
      await this.storage.set('eventos', eventos);
    }

    this.etapaAtual = 1;
    this.router.navigateByUrl('/eventos');
  }
}
