import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaccoregistrationPage } from './saccoregistration.page';

const routes: Routes = [
  {
    path: '',
    component: SaccoregistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaccoregistrationPage]
})
export class SaccoregistrationPageModule {}
