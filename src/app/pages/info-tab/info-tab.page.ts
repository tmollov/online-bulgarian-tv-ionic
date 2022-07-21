import { Component, OnInit } from '@angular/core';
import { ReturnUrl } from 'src/app/constants/returnUrl';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './info-tab.page.html',
  styleUrls: ['./info-tab.page.scss'],
})
export class InfoTabPage {
  url = ReturnUrl.path;

  toggleBar(ionChangeEvent) {
    if (ionChangeEvent.detail.checked) {
      StatusBar.hide();
      return;
    }

    StatusBar.show();
  }
}
