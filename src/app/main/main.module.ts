import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { SkillpageComponent } from './skillpage/skillpage.component';



@NgModule({
  declarations: [MainComponent, EmailpageComponent, SkillpageComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
