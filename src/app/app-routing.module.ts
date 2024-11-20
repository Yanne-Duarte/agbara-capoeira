import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GlobalComponent } from './global/global.component';

const routes: Routes = [
  //  {    path:'',     component: GlobalComponent  }
  { path: '', loadChildren: () => import('./global/global-routing.module').then(m => m.GlobalRoutingModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
