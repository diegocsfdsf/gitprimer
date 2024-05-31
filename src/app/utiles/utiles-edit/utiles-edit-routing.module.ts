import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilesEditPage } from './utiles-edit.page';

const routes: Routes = [
  {
    path: '',
    component: UtilesEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilesEditPageRoutingModule {}
