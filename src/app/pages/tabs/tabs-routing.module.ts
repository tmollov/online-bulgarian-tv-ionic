import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
      {
        path: 'tv',
        loadChildren: () =>
          import('../tv-channels-tab/tv-channels.module').then(
            (m) => m.TvChannelsPageModule
          ),
      },
      {
        path: 'music',
        loadChildren: () =>
          import('../music-channels-tab/music-channels.module').then(
            (m) => m.MusicChannelsPageModule
          ),
      },
      {
        path: 'info',
        loadChildren: () =>
          import('../info-tab/info-tab.module').then(
            (m) => m.InfoTabPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/tv',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
