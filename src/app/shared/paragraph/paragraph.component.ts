import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  constructor() { }

  @Input() public paragraph: string;
  @Input() public title: string;

  ngOnInit() {
  }

}
