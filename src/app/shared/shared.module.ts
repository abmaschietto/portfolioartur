import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { BannerComponent } from './banner/banner.component';
import { QuoteComponent } from './quote/quote.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ParagraphComponent,
    BannerComponent,
    QuoteComponent],

  imports: [
    CommonModule,
    FontAwesomeModule
  ],

  exports:[
    ParagraphComponent,
    BannerComponent,
    QuoteComponent
  ]
})
export class SharedModule { }
