import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TvChannelsPageRoutingModule } from "./tv-channels-routing.module";
import { HeaderPageModule } from "../header/header.module";
import { TvChannelsPage } from "./tv-channels.page";
import { ChannelsGridViewPageModule } from "src/app/components/channels-grid-view/channels-grid-view.module";
import { NoInternetPageModule } from "src/app/components/no-internet/no-internet.module";
import { LoaderPageModule } from "src/app/components/loader/loader.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TvChannelsPageRoutingModule,
    HeaderPageModule,
    ChannelsGridViewPageModule,
    NoInternetPageModule,
    LoaderPageModule,
  ],
  declarations: [TvChannelsPage],
})
export class TvChannelsPageModule {}
