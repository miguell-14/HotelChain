import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'quartos1',
    loadChildren: () => import('./quartos1/quartos1.module').then( m => m.Quartos1PageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosModule)
  },
  {
    path: 'termostato',
    loadChildren: () => import('./termostato/termostato.module').then( m => m.TermostatoPageModule)
  },
  {
    path: 'controlo-temperatura',
    loadChildren: () => import('./controlo-temperatura/controlo-temperatura.module').then( m => m.ControloTemperaturaPageModule)
  },
  {
    path: 'alterar-quartos/:id',
    loadChildren: () => import('./alterar-quartos/alterar-quartos.module').then( m => m.AlterarQuartosPageModule)
  },
  {  path: 'criar-evento',
    loadChildren: () => import('./criar-evento/criar-evento.module').then( m => m.CriarEventoPageModule)
  },
  {
    path: 'editar-evento/:id',
    loadChildren: () => import('./editar-evento/editar-evento.module').then(m => m.EditarEventoPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
