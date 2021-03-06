import { TimelineComponent } from './shared/timeline/timeline.component';
import { ModalComponent } from './shared/modal/modal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackstageComponent } from './main/backstage/backstage.component';
import { EmailpageComponent } from './main/emailpage/emailpage.component';
import { MainComponent } from './main/main/main.component';
import { SkillpageComponent } from './main/skillpage/skillpage.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: MainComponent, data: {animation: 'Home'}},
  {path: 'email', component: EmailpageComponent,  data: {animation: 'Contato'}},
  {path: 'skills', component: SkillpageComponent,  data: {animation: 'Skills'}},
  {path: 'backstage', component: BackstageComponent,  data: {animation: 'Backstage'}},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
