import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() cardParagraph: string;
  @Input() cardSecondParagraph: string;
  @Input() firstImage: string;
  @Input() secondImage: string;
  @Input() thirdImage: string;
  referenceId: string;
  carouselId: string;

  constructor() {
   }
  ngOnInit() {
    this.carouselId = `${this.cardTitle}ID`;
    this.referenceId = `#${this.carouselId}`;
    AOS.init();
  }

}
