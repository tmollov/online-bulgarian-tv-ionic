import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoTabPageRoutingModule } from './info-tab-routing.module';

import { InfoTabPage } from './info-tab.page';
import { HeaderPageModule } from '../header/header.module';
import { BackButtonPageModule } from 'src/app/components/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoTabPageRoutingModule,
    HeaderPageModule,
    BackButtonPageModule,
  ],
  declarations: [InfoTabPage],
})
export class InfoTabPageModule {}
