import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EditComponent } from './edit/edit.component';
import { DonorrequestComponent } from './donorrequest/donorrequest.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { PreviousrequestComponent } from './previousrequest/previousrequest.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    UserComponent,
    EditComponent,
    DonorrequestComponent,
    BloodrequestComponent,
    ProfileEditComponent,
    PreviousrequestComponent,
    UpdateRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
