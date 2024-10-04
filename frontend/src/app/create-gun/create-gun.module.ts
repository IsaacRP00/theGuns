import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateGunPageRoutingModule } from './create-gun-routing.module';

import { CreateGunPage } from './create-gun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateGunPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateGunPage]
})
export class CreateGunPageModule {}
