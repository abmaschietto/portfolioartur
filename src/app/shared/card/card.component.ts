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

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
