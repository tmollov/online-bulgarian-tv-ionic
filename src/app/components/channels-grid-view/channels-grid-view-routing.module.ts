import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelsGridViewPage } from './channels-grid-view.page';

const routes: Routes = [
  {
    path: '',
    component: ChannelsGridViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsGridViewPageRoutingModule {}
