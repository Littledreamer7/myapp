import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { FbComponent } from './fb/fb.component';
import { DemoComponent } from './demo/demo.component';
import { PantsComponent } from './fb/pants/pants.component';
import { ShirtsComponent } from './fb/shirts/shirts.component';
import { UserComponent } from './user/user.component';
import { Otto1Component } from './otto1/otto1.component';
// Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// ngx
import { NgxSpinnerModule } from 'ngx-spinner';
import{CookieService} from 'ngx-cookie-service';
// Pipes
import { FilterPipe } from './user/filter.pipe';
import { ShirtsPipe } from './fb/shirts/shirts.pipe';


const routes:Routes = [
  {path:'login',component:LoginComponent },
  {path:'fb', component:FbComponent},
  {path:'demo', component:DemoComponent},
  {path:'pants',component:PantsComponent},
  {path:'shirts',component:ShirtsComponent },
  {path: 'user',component:UserComponent},
  {path:'otto1',component:Otto1Component},
]

@NgModule({
  declarations: [
    UserComponent,
    AppComponent,
    LoginComponent,
    FbComponent,
    DemoComponent,
    ShirtsComponent,
    PantsComponent,
    FilterPipe,
    ShirtsPipe,
    Otto1Component,
  ],

  imports: [
    BrowserModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
