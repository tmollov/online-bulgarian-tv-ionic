/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { IChannel } from 'src/app/models/channel.inteface';
import { ChannelsService } from 'src/app/services/channels.service';

@Component({
  selector: 'app-tv-channels',
  templateUrl: 'tv-channels.page.html',
  styleUrls: ['tv-channels.page.scss'],
})
export class TvChannelsPage implements OnInit {
  constructor(public channelService: ChannelsService) {}

  ngOnInit(): void {
    this.channelService.fetchTvChannels().subscribe((res) => {
      this.channelService.tvChannels = res;
    });
  }
}
