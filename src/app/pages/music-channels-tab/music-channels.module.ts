import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicChannelsPage } from './music-channels.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MusicChannelsPageRoutingModule } from './music-channels-routing.module';
import { HeaderPageModule } from '../header/header.module';
import { ChannelsGridViewPageModule } from 'src/app/components/channels-grid-view/channels-grid-view.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MusicChannelsPageRoutingModule,
    HeaderPageModule,
    ChannelsGridViewPageModule
  ],
  declarations: [MusicChannelsPage],
})
export class MusicChannelsPageModule {}
