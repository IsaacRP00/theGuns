import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateGunPage } from './create-gun.page';

const routes: Routes = [
  {
    path: '',
    component: CreateGunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateGunPageRoutingModule {}
