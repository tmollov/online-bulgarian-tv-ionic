import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LoaderPage } from "./loader.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [LoaderPage],
  exports: [LoaderPage],
})
export class LoaderPageModule {}
