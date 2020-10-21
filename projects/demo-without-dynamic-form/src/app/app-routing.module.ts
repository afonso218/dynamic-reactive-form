import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'newForm',
    loadChildren: () =>
      import('./new-form/new-form.module').then((m) => m.NewFormModule),
  },
  {
    path: 'editForm',
    loadChildren: () =>
      import('./edit-form/edit-form.module').then((m) => m.EditFormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
