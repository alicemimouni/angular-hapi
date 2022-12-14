import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user-detail/:user_id', component: UserDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: '',  redirectTo: '/home', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
