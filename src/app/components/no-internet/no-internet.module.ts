import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NoInternetPage } from "./no-internet.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [NoInternetPage],
  exports: [NoInternetPage],
})
export class NoInternetPageModule {}
