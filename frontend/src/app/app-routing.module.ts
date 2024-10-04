import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'all-guns', loadChildren: () => import('./all-guns/all-guns.module').then( m => m.AllGunsPageModule)},
  {path: 'create-gun', loadChildren: () => import('./create-gun/create-gun.module').then( m => m.CreateGunPageModule)},
  {path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},  {
    path: 'updates',
    loadChildren: () => import('./updates/updates.module').then( m => m.UpdatesPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
