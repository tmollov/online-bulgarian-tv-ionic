import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MusicChannelsPage } from "./music-channels.page";

import { HeaderPageModule } from "../header/header.module";
import { ChannelsGridViewPageModule } from "src/app/components/channels-grid-view/channels-grid-view.module";
import { NoInternetPageModule } from "src/app/components/no-internet/no-internet.module";
import { LoaderPageModule } from "src/app/components/loader/loader.module";
import { MusicChannelsPageRoutingModule } from "./music-channels-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MusicChannelsPageRoutingModule,
    HeaderPageModule,
    ChannelsGridViewPageModule,
    NoInternetPageModule,
    LoaderPageModule,
  ],
  declarations: [MusicChannelsPage],
})
export class MusicChannelsPageModule {}
