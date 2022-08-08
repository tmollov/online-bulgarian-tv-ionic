import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReturnUrl } from "src/app/constants/returnUrl";
import { IChannel } from "src/app/models/channel.inteface";

@Component({
  selector: "app-channels-grid-view",
  templateUrl: "./channels-grid-view.page.html",
  styleUrls: ["./channels-grid-view.page.scss"],
})
export class ChannelsGridViewPage {
  @Input() channelsArray: IChannel[];

  constructor(private router: Router) {}

  identify(index, item: IChannel) {
    return item.name;
  }

  goTo(channelName: string) {
    ReturnUrl.path = window.location.pathname;
    this.router.navigate(["/channel/", channelName]);
  }
}
