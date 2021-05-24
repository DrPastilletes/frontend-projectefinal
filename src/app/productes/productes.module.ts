import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductesPageRoutingModule } from './productes-routing.module';

import { ProductesPage } from './productes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductesPageRoutingModule
  ],
  declarations: [ProductesPage]
})
export class ProductesPageModule {}
