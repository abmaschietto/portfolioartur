import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-timeline-albe';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  data: Array<TimelineItem> | string;

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        datetime: new Date('2021-07-01 23:59:59'),
        header: 'São Paulo SP',
        body: [
          {
            tag: 'h1',
            content: 'Formação Concluída'
          },
          {
            tag: 'p',
            content: 'Análise e Desenvolvimento de sistemas.'
          }],
        footer: 'Universidade Cruzeiro do Sul'
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
