import { Component, Input, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import * as AOS from 'aos';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quoteIcon = faQuoteLeft;
  @Input() public quoted: string;
  @Input() public textQuote: string;
  @Input() public quoteSource: string;

  constructor() { }


  ngOnInit() {
    AOS.init();
  }



}
