import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { BannerComponent } from './banner/banner.component';
import { QuoteComponent } from './quote/quote.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ParagraphComponent,
    BannerComponent,
    QuoteComponent,
    CardComponent],

  imports: [
    CommonModule,
    FontAwesomeModule
  ],

  exports:[
    ParagraphComponent,
    BannerComponent,
    QuoteComponent,
    CardComponent
  ]
})
export class SharedModule { }
