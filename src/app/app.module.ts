import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LeadComponent } from './lead/lead.component';
import { LeadViewComponent } from './leadview/leadview.component';
import { ApprovalComponent } from './approval/approval.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClassComponent } from './class/class.component';
import { HomeComponent } from './home/home.component';
import { LeadEditComponent } from './lead-edit/lead-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeadComponent,
    LeadViewComponent,
    ApprovalComponent,
    ClassComponent,
    HomeComponent,
    LeadEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
