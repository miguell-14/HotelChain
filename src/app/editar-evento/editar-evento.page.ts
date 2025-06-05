import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.page.html',
  styleUrls: ['./editar-evento.page.scss'],
  standalone: false
})
export class EditarEventoPage {
  evento: any = {};
  etapaAtual = 1;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.id = +this.route.snapshot.paramMap.get('id')!;
    const eventos = await this.storage.get('eventos');
    const existente = eventos.find((e: any) => e.id === this.id);
    if (existente) {
      this.evento = { ...existente };
      this.evento.id = this.id; 
    }
  }
  

  proximaEtapa() {
    if (this.etapaAtual < 3) this.etapaAtual++;
  }

  etapaAnterior() {
    if (this.etapaAtual > 1) this.etapaAtual--;
  }

  async guardarAlteracoes() {
    const eventos = await this.storage.get('eventos');
    console.log('ID atual:', this.id);
    console.log('Eventos carregados:', eventos);
  
    const index = eventos.findIndex((e: any) => e.id === this.id);
    console.log('Índice encontrado:', index);
  
    if (index !== -1) {
      this.evento.id = this.id;
      eventos[index] = this.evento;
      await this.storage.set('eventos', eventos);
  
      const toast = await this.toastCtrl.create({
        message: 'Alterações guardadas com sucesso!',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
  
      this.router.navigateByUrl('/eventos');
    } else {
      console.error('Evento não encontrado. ID:', this.id);
    }
  }
  
  

  async eliminarEvento() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: 'Tens a certeza que queres eliminar este evento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            const eventos = await this.storage.get('eventos');
            const atualizados = eventos.filter((e: any) => e.id !== this.id);
            await this.storage.set('eventos', atualizados);

            const toast = await this.toastCtrl.create({
              message: 'Evento eliminado com sucesso!',
              duration: 2000,
              color: 'danger'
            });
            await toast.present();

            this.router.navigateByUrl('/eventos');
          }
        }
      ]
    });

    await alert.present();
  }
}
