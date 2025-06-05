import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-alterar-quartos',
  templateUrl: './alterar-quartos.page.html',
  styleUrls: ['./alterar-quartos.page.scss'],
  standalone: false
})
export class AlterarQuartosPage implements OnInit {

  quartos: any[] = [];
  quarto: any;
  idQuarto: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) {}

  camposInvalidos = {
    utilizador: false,
    dataCheckin: false,
    dataCheckout: false
  };
  
  dataMinimaHoje: string = '';

obterDataHojeFormatada(): string {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
  const dia = hoje.getDate().toString().padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}


  async ngOnInit() {
    await this.storage.create();
    this.dataMinimaHoje = this.obterDataHojeFormatada();
    
    this.idQuarto = this.route.snapshot.paramMap.get('id');
    this.quartos = (await this.storage.get('quartos')) || [];

    if (this.idQuarto) {
      this.quarto = this.quartos.find(q => q.id === this.idQuarto);
    }
  }

  guardarAlteracoes() {
    if (!this.quarto.estado || this.quarto.estado.trim() === '') {
      alert('Por favor, selecione o estado do quarto.');
      return;
    }
  
    if (this.quarto.estado === 'Ocupado') {
      if (
        !this.quarto.utilizador || this.quarto.utilizador.trim() === '' ||
        !this.quarto.dataCheckout
      ) {
        alert('Por favor, preencha todos os campos para poder guardar!');
        return;
      }
    }
  
    if (this.quarto.estado === 'Reservado') {
      if (
        !this.quarto.utilizador || this.quarto.utilizador.trim() === '' ||
        !this.quarto.dataCheckin ||
        !this.quarto.dataCheckout
      ) {
        alert('Por favor, preencha todos os campos para poder guardar!');
        return;
      }
    }
  
    // Validação extra opcional: garantir que as datas são válidas
    if (this.quarto.dataCheckin && this.quarto.dataCheckout &&
        new Date(this.quarto.dataCheckin) > new Date(this.quarto.dataCheckout)) {
      alert('A data de check-in não pode ser posterior à data de checkout.');
      return;
    }
  
    // Guardar as alterações no storage
    const index = this.quartos.findIndex(q => q.id === this.idQuarto);
    if (index !== -1) {
      this.quartos[index] = this.quarto;
      this.storage.set('quartos', this.quartos);
      alert('Alterações guardadas com sucesso!');
      this.router.navigate(['/quartos1']);
    }
  }
  

  cancelar() {
    // Voltar para a página da lista de quartos sem guardar alterações
    this.router.navigate(['/quartos1']);
  }
}