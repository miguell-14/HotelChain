import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoDetalhesPageRoutingModule } from './evento-detalhes-routing.module';

import { EventoDetalhesPage } from './evento-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoDetalhesPageRoutingModule
  ],
  declarations: [EventoDetalhesPage]
})
export class EventoDetalhesPageModule {}
