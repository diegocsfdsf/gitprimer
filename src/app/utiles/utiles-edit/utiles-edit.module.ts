import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilesEditPageRoutingModule } from './utiles-edit-routing.module';

import { UtilesEditPage } from './utiles-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilesEditPageRoutingModule
  ],
  declarations: [UtilesEditPage]
})
export class UtilesEditPageModule {}
