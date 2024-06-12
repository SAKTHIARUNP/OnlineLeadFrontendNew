import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadComponent } from './lead/lead.component';
import { LeadViewComponent } from './leadview/leadview.component';
import { LeadEditComponent } from './lead-edit/lead-edit.component';
import { ApprovalComponent } from './approval/approval.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'lead', component: LeadComponent },
  { path: 'leadview/:id', component: LeadViewComponent },
  { path: 'lead-edit/:id', component: LeadEditComponent },
  { path: 'approval/:id', component: ApprovalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
