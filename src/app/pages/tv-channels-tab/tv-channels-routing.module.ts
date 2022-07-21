import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvChannelsPage } from './tv-channels.page';

const routes: Routes = [
  {
    path: '',
    component: TvChannelsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvChannelsPageRoutingModule {}
