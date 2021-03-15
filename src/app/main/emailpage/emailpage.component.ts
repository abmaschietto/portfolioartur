import { Component, OnInit } from '@angular/core';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-emailpage',
  templateUrl: './emailpage.component.html',
  styleUrls: ['./emailpage.component.css']
})
export class EmailpageComponent implements OnInit {

  envedlopeIcon = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
