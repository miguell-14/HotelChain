import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quartos1PageRoutingModule } from './quartos1-routing.module';

import { Quartos1Page } from './quartos1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quartos1PageRoutingModule
  ],
  declarations: [Quartos1Page]
})
export class Quartos1PageModule {}

