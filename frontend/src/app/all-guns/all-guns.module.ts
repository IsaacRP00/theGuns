import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllGunsPageRoutingModule } from './all-guns-routing.module';

import { AllGunsPage } from './all-guns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllGunsPageRoutingModule
  ],
  declarations: [AllGunsPage]
})
export class AllGunsPageModule {}
