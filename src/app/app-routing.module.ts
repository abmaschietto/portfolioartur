import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailpageComponent } from './main/emailpage/emailpage.component';
import { MainComponent } from './main/main/main.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {path:'home', component:MainComponent, data: {animation: 'Home'}},
  {path:'email', component:EmailpageComponent,  data: {animation: 'Contato'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
