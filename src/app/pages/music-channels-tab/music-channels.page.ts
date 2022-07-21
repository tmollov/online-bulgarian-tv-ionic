import { Component, OnInit } from '@angular/core';
import { ChannelsService } from 'src/app/services/channels.service';

@Component({
  selector: 'app-music-channels',
  templateUrl: 'music-channels.page.html',
  styleUrls: ['music-channels.page.scss'],
})
export class MusicChannelsPage implements OnInit {
  constructor(public channelService: ChannelsService) {}

  ngOnInit(): void {
    this.channelService.fetchMusicChannels().subscribe((res) => {
      this.channelService.musicChannels = res;
    });
  }
}
