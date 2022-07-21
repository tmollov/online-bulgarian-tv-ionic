import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChannelsGridViewPageRoutingModule } from './channels-grid-view-routing.module';

import { ChannelsGridViewPage } from './channels-grid-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ChannelsGridViewPageRoutingModule,
  ],
  declarations: [ChannelsGridViewPage],
  exports: [ChannelsGridViewPage],
})
export class ChannelsGridViewPageModule {}
