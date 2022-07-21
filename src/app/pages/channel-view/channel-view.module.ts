import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ChannelViewPageRoutingModule } from './channel-view-routing.module';

import { ChannelViewPage } from './channel-view.page';
import { HeaderPageModule } from '../header/header.module';
import { BackButtonPageModule } from 'src/app/components/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChannelViewPageRoutingModule,
    HeaderPageModule,
    BackButtonPageModule,
    HttpClientModule,
  ],
  declarations: [ChannelViewPage],
  exports: [ChannelViewPageRoutingModule],
})
export class ChannelViewPageModule {}
