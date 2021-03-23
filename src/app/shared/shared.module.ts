import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { BannerComponent } from './banner/banner.component';
import { QuoteComponent } from './quote/quote.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgxTimelineAlbeModule } from 'ngx-timeline-albe';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ParagraphComponent,
    BannerComponent,
    QuoteComponent,
    CardComponent,
    ModalComponent,
    TimelineComponent,
    FooterComponent],

  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxTimelineAlbeModule
  ],

  exports:[
    ParagraphComponent,
    BannerComponent,
    QuoteComponent,
    CardComponent,
    TimelineComponent,
    FooterComponent
  ]
})
export class SharedModule { }
