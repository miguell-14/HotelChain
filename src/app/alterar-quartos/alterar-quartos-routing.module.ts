import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarQuartosPage } from './alterar-quartos.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarQuartosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarQuartosPageRoutingModule {}
