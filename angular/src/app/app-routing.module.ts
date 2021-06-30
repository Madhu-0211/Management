import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { DonorrequestComponent } from './donorrequest/donorrequest.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { PreviousrequestComponent } from './previousrequest/previousrequest.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'profile-edit/:id', component: ProfileEditComponent },
  { path: 'donorrequest', component: DonorrequestComponent },
  { path: 'bloodrequest', component: BloodrequestComponent },
  { path: 'previousrequest', component: PreviousrequestComponent },
  { path: 'update-request', component: UpdateRequestComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
