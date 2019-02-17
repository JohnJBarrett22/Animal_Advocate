import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
// import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { ProfileComponent } from './profile/profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';
import { DogcareComponent } from './dogcare/dogcare.component';
import { CatcareComponent } from './catcare/catcare.component';
import { RescuesComponent } from './rescues/rescues.component';
import { VideosComponent } from './videos/videos.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    EditComponent,
    DetailComponent,
    InfoComponent,
    LoginComponent,
    DogComponent,
    CatComponent,
    ProfileComponent,
    UserEditComponent,
    FaqComponent,
    PrivacyComponent,
    AboutComponent,
    DogcareComponent,
    CatcareComponent,
    RescuesComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ParallaxModule,
<<<<<<< HEAD
    MDBBootstrapModule.forRoot()
=======
    MDBBootstrapModule,
>>>>>>> 4e8e4003acc8551953013ea3bd0b34f0a3caf0d7
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
