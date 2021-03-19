import { Component, Input, OnInit } from '@angular/core';
import { certificado } from 'src/app/models/certificado';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() certificados: certificado[];

  constructor() { }

  ngOnInit() {
    console.log(this.certificados);
    
  }

}
