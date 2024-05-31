import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'utiles-list',
    loadChildren: () => import('./utiles/utiles-list/utiles-list.module').then( m => m.UtilesListPageModule)
  },
  {
    path: 'utiles-edit',
    loadChildren: () => import('./utiles/utiles-edit/utiles-edit.module').then( m => m.UtilesEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
