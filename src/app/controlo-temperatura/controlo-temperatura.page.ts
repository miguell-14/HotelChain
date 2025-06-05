import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-controlo-temperatura',
  templateUrl: './controlo-temperatura.page.html',
  styleUrls: ['./controlo-temperatura.page.scss'],
  standalone: false
})
export class ControloTemperaturaPage {
  subzona: string = '';
  temperatura: number = 20;
  arCondicionado: boolean = true;

  constructor(private router: Router, private storage: Storage,private toastController: ToastController) {
    
  }

  async ionViewWillEnter() {
    await this.storage.create();

    // Obter subzona a partir do state de forma segura
    const state = history.state;
    this.subzona = state.subzona || 'Zona';

    // Carregar dados da storage
    const data = await this.storage.get(this.subzona);
    if (data) {
      this.temperatura = data.temperatura;
      this.arCondicionado = data.arCondicionado;
    }
  }

  async guardarTemperatura() {
    await this.storage.set(this.subzona, {
      temperatura: this.temperatura,
      arCondicionado: this.arCondicionado
    });
    this.presentToast('Temperatura guardada com sucesso!');
  }
  
  async guardarAC() {
    await this.storage.set(this.subzona, {
      temperatura: this.temperatura,
      arCondicionado: this.arCondicionado
    });
    // Sem toast aqui
  }
  
  
  async presentToast(msg: string, cor: string = 'success') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      color: cor
    });
    await toast.present();
  }
  
}
