// eventos.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EventosPage } from './eventos.page';
import { EventosPageRoutingModule } from './eventos-routing.module';

@NgModule({
  declarations: [EventosPage],
  imports: [
    CommonModule,
    IonicModule, // Importação necessária para componentes Ionic
    EventosPageRoutingModule
  ]
})
export class EventosModule {}