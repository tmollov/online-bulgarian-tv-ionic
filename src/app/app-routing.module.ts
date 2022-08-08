import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'channel',
    loadChildren: () =>
      import('./pages/channel-view/channel-view.module').then(
        (m) => m.ChannelViewPageModule
      ),
  },
  {
    path: 'back-button',
    loadChildren: () =>
      import('./components/back-button/back-button.module').then(
        (m) => m.BackButtonPageModule
      ),
  },
  {
    path: 'no-internet',
    loadChildren: () => import('./components/no-internet/no-internet.module').then( m => m.NoInternetPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
