import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackButtonPage } from './back-button.page';

const routes: Routes = [
  {
    path: '',
    component: BackButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackButtonPageRoutingModule {}
