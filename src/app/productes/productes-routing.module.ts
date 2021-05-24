import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductesPage } from './productes.page';

const routes: Routes = [
  {
    path: '',
    component: ProductesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductesPageRoutingModule {}
