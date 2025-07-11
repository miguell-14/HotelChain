import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarEventoPage } from './criar-evento.page';

const routes: Routes = [
  {
    path: '',
    component: CriarEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarEventoPageRoutingModule {}
