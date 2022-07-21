import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicChannelsPage } from './music-channels.page';

const routes: Routes = [
  {
    path: '',
    component: MusicChannelsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicChannelsPageRoutingModule {}
