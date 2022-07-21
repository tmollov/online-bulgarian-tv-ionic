import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelViewPage } from './channel-view.page';

const routes: Routes = [
  {
    path: ':name',
    component: ChannelViewPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelViewPageRoutingModule {}
