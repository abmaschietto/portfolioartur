import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-timeline-albe';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  data: Array<TimelineItem> | String;

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        datetime: new Date('2021-03-16 23:59:59'),
        header: 'São Paulo SP',
        body: [
          {
            tag: 'h1',
            content: 'Desenvolvedor Full Stack Pleno'
          },
          {
            tag: 'p',
            content: 'Responsável por integrações, manutenção e melhorias em aplicativos Java/Angular.'
          }],
        footer: 'Della Volpe Transportes'
      },
      {
        datetime: new Date('2020-10-06 23:59:59'),
        header: 'São Paulo SP',
        body: [
          {
            tag: 'h1',
            content: 'Desenvolvedor Full Stack Jr'
          },
          {
            tag: 'p',
            content: 'Responsável por integrações, manutenção e melhorias em aplicativos Java/Angular.'
          }],
        footer: 'Della Volpe Transportes'
      },
      {
        datetime: new Date('2020-06-1 23:59:59'),
        header:  'São Paulo SP',
        body: [
          {
            tag: 'h1',
            content: 'Desenvolvedor projeto SABRE'
          },
          {
            tag: 'p',
            content: 'Desenvolvedor Vue Front-End/ Java/Spring Back-end'
          }],
        footer: 'POWERPUSH'
      }
    ];
  }

}
