import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EmailpageComponent } from './emailpage/emailpage.component';



@NgModule({
  declarations: [MainComponent, EmailpageComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
