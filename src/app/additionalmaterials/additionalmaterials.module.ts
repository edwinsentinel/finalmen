import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdditionalmaterialsPage } from './additionalmaterials.page';

const routes: Routes = [
  {
    path: '',
    component: AdditionalmaterialsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdditionalmaterialsPage]
})
export class AdditionalmaterialsPageModule {}
