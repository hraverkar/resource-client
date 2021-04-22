import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewResourcesComponent } from './new-resources/new-resources.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', component: HomeComponent
  },{
    path: 'addNewResources', component: NewResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
