import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpdatesPageRoutingModule } from './updates-routing.module';
import { UpdatesPage } from './updates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatesPage]
})
export class UpdatesPageModule {}
