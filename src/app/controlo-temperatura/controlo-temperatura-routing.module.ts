import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControloTemperaturaPage } from './controlo-temperatura.page';

const routes: Routes = [
  {
    path: '',
    component: ControloTemperaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControloTemperaturaPageRoutingModule {}
