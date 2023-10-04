import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsermainpageComponent } from './usermainpage/usermainpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FrontPageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'manager/:id', component: UsermainpageComponent },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
