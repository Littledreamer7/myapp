import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { FbComponent } from './fb/fb.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
{
path:'login',
loadChildren: () => import('./Login/login.component').then(m => m.LoginComponent)},

{path:'fb',
loadChildren: () => import('./fb/fb.component').then(m => m.FbComponent)},

{path:'demo',
loadChildren: () => import('./demo/demo.component').then(m => m.DemoComponent)},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
