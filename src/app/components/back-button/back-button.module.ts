import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackButtonPageRoutingModule } from './back-button-routing.module';

import { BackButtonPage } from './back-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonPageRoutingModule,
  ],
  declarations: [BackButtonPage],
  exports: [BackButtonPage],
})
export class BackButtonPageModule {}
