import { Component } from '@angular/core';
import { ReturnUrl } from 'src/app/constants/returnUrl';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  setReturnUrl(path: string) {
    ReturnUrl.path = path;
  }
}
