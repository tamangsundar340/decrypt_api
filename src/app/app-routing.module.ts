import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FacebookIntegrationComponent } from './components/facebook-integration/facebook-integration.component';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'', component:UserComponent},
  {path:'data-table', component:DataTableComponent},
  { path: 'user/:id', component:UserDetailComponent  },
  { path: 'facebook-integration', component:FacebookIntegrationComponent  },
  { path: 'recaptcha', component:RecaptchaComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
