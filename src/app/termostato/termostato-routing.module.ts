import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermostatoPage } from './termostato.page';

const routes: Routes = [
  {
    path: '',
    component: TermostatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermostatoPageRoutingModule {}
