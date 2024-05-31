import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilesListPageRoutingModule } from './utiles-list-routing.module';

import { UtilesListPage } from './utiles-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilesListPageRoutingModule
  ],
  declarations: [UtilesListPage]
})
export class UtilesListPageModule {}
