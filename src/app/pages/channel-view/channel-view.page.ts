import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from 'src/app/services/channels.service';
import { ReturnUrl } from 'src/app/constants/returnUrl';

@Component({
  selector: 'app-channel-view',
  templateUrl: './channel-view.page.html',
  styleUrls: ['./channel-view.page.scss'],
})
export class ChannelViewPage implements OnInit {
  public url = ReturnUrl.path;
  public videoSource!: SafeResourceUrl;
  public showVideo = false;

  constructor(
    private route: ActivatedRoute,
    private service: ChannelsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const url = this.service.getChannel(params.name).sourceUrl;
      this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.showVideo = true;
    });
  }
}
