import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { SkillpageComponent } from './skillpage/skillpage.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MainComponent, EmailpageComponent, SkillpageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
