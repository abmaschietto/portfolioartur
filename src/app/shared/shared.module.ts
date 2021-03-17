import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { BannerComponent } from './banner/banner.component';
import { QuoteComponent } from './quote/quote.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    ParagraphComponent,
    BannerComponent,
    QuoteComponent,
    CardComponent,
    ModalComponent],

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
