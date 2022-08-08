import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";
import { ChannelsService } from "src/app/services/channels.service";

@Component({
  selector: "app-music-channels",
  templateUrl: "music-channels.page.html",
  styleUrls: ["music-channels.page.scss"],
})
export class MusicChannelsPage implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(public channelService: ChannelsService) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.channelService.fetchMusicChannels().subscribe((res) => {
        this.channelService.musicChannels = res;
      })
    );
  }
}
