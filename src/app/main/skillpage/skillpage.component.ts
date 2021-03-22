import { Component, OnInit } from '@angular/core';
import { certificado } from 'src/app/models/certificado';

@Component({
  selector: 'app-skillpage',
  templateUrl: './skillpage.component.html',
  styleUrls: ['./skillpage.component.css']
})
export class SkillpageComponent implements OnInit {


  formacaoJava: certificado = new certificado('Formação Java', 'https://cursos.alura.com.br/degree/certificate/f4db46a2-5a78-410d-9362-c23bb6c6c1a6');
  formacaoSpring: certificado = new certificado('Formação Spring', 'https://cursos.alura.com.br/certificate/arturboudoux/spring-boot-api-rest');
  testesComJava: certificado = new certificado('Testes de integração com Spring Boot', 'https://www.udemy.com/certificate/UC-1c436ac3-fd33-4516-8252-718a2bdb0c24/');
  domineJavaOito: certificado = new certificado('Especialização Java 8', 'https://cursos.alura.com.br/certificate/arturboudoux/java8-lambdas');
  designPatternsJava: certificado = new certificado('Design Patterns com Java', 'https://www.udemy.com/certificate/UC-144443f5-2674-4e99-b283-d3348193412e/');
  javaCertificados: certificado[];

  formacaoVue: certificado = new certificado('Formação Vue', 'https://cursos.alura.com.br/user/arturboudoux/degree-vuejs-2437/certificate');
  javascript: certificado = new certificado('Formação Javascript','https://cursos.alura.com.br/certificate/arturboudoux/javascript-programando-na-linguagem-web');
  formaçãoAngular: certificado = new certificado('Formação Angular', 'https://www.udemy.com/certificate/UC-ed7e3c05-a578-4586-97cc-0fcc6ef7cc62/');
  jsCertificados: certificado[];

  DDD: certificado = new certificado('Domain Driven Design', 'https://cursos.alura.com.br/certificate/arturboudoux/java-domain-driven-design-conceitos');
  rabbitMq: certificado = new certificado('Rabbit Mq', 'https://www.udemy.com/certificate/UC-ff97e359-d168-4711-8f6a-76d45d0d9631/');
  outrosCertificados: certificado[];

  oracleSql: certificado = new certificado('Oracle Database', 'https://cursos.alura.com.br/certificate/arturboudoux/oracle-database-sql-dml');
  sqlCertificados: certificado[];


  constructor() { }

  ngOnInit() {
    this.javaCertificados = [this.formacaoJava, this.formacaoSpring, this.testesComJava, this.designPatternsJava, this.domineJavaOito];
    this.jsCertificados = [this.javascript, this.formacaoVue, this.formaçãoAngular];
    this.sqlCertificados = [this.oracleSql];
    this.outrosCertificados = [this.rabbitMq, this.DDD, this.designPatternsJava];
  }

}
