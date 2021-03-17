import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { SkillpageComponent } from './skillpage/skillpage.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackstageComponent } from './backstage/backstage.component';




@NgModule({
  declarations: [MainComponent, EmailpageComponent, SkillpageComponent, BackstageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class MainModule { }
