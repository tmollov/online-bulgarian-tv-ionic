import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TvChannelsPageRoutingModule } from './tv-channels-routing.module';
import { HeaderPageModule } from '../header/header.module';
import { TvChannelsPage } from './tv-channels.page';
import { ChannelsGridViewPageModule } from 'src/app/components/channels-grid-view/channels-grid-view.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TvChannelsPageRoutingModule,
    HeaderPageModule,
    ChannelsGridViewPageModule,
  ],
  declarations: [TvChannelsPage],
})
export class TvChannelsPageModule {}
