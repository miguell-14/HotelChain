import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoDetalhesPage } from './evento-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: EventoDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoDetalhesPageRoutingModule {}
