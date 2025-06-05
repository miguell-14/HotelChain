import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControloTemperaturaPageRoutingModule } from './controlo-temperatura-routing.module';

import { ControloTemperaturaPage } from './controlo-temperatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControloTemperaturaPageRoutingModule
  ],
  declarations: [ControloTemperaturaPage]
})
export class ControloTemperaturaPageModule {}
