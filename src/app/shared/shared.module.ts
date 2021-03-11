import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    ParagraphComponent,
    BannerComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ParagraphComponent,
    BannerComponent]
})
export class SharedModule { }
