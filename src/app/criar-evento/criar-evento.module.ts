import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { CriarEventoPageRoutingModule } from './criar-evento-routing.module';
import { CriarEventoPage } from './criar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarEventoPageRoutingModule
  ],
  declarations: [CriarEventoPage],
  providers: [Storage] 
})
export class CriarEventoPageModule {}
