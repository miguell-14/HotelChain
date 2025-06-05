import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quartos1Page } from './quartos1.page';

const routes: Routes = [
  {
    path: '',
    component: Quartos1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quartos1PageRoutingModule {}
