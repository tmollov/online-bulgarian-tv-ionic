/* eslint-disable max-len */
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";
import { ChannelsService } from "src/app/services/channels.service";

@Component({
  selector: "app-tv-channels",
  templateUrl: "tv-channels.page.html",
  styleUrls: ["tv-channels.page.scss"],
})
export class TvChannelsPage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  constructor(public channelService: ChannelsService) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.channelService.fetchTvChannels().subscribe((res) => {
        this.channelService.tvChannels = res;
      })
    );
  }
}
