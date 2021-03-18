import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { BannerComponent } from './banner/banner.component';
import { QuoteComponent } from './quote/quote.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    ParagraphComponent,
    BannerComponent,
    QuoteComponent,
    CardComponent,
    ModalComponent,
    TimelineComponent],

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
