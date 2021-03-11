import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  constructor() { }

  @Input() private paragraph: string;

  ngOnInit() {
  }

}
