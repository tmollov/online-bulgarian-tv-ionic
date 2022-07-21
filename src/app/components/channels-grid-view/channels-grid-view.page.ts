import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnUrl } from 'src/app/constants/returnUrl';
import { IChannel } from 'src/app/models/channel.inteface';
import { ChannelsService } from 'src/app/services/channels.service';

@Component({
  selector: 'app-channels-grid-view',
  templateUrl: './channels-grid-view.page.html',
  styleUrls: ['./channels-grid-view.page.scss'],
})
export class ChannelsGridViewPage {
  @Input() channelsArray: IChannel[];

  constructor(public channels: ChannelsService, private router: Router) {}

  identify(index, item: IChannel) {
    return item.name;
  }

  index(index, item: number) {
    return item;
  }

  goTo(channelName: string) {
    ReturnUrl.path = window.location.pathname;

    this.router.navigate(['/channel/', channelName]);
  }
}
