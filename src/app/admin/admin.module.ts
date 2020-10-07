import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes:Routes =[
  {path:'',component:AdminComponent}
]


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(adminRoutes)],
    CommonModule
  ]})
export class AdminModule { }
