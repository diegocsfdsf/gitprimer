import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilesListPage } from './utiles-list.page';

const routes: Routes = [
  {
    path: '',
    component: UtilesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilesListPageRoutingModule {}
