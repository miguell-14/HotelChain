import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermostatoPageRoutingModule } from './termostato-routing.module';

import { TermostatoPage } from './termostato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermostatoPageRoutingModule
  ],
  declarations: [TermostatoPage]
})
export class TermostatoPageModule {}
