import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  routes: Routes = [
    { path: 'login', component: LoginpageComponent },
    {
      path: '',
      redirectTo: '/frontpage',
      component: FrontPageComponent,
      pathMatch: 'full',
    },
    { path: 'frontpage', component: FrontPageComponent },
  ];
}
