import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

@Input() private imgPath: string;
@Input() private imgDescription: string;

  ngOnInit() {

  }

}
