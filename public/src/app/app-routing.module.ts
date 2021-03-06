import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {path: "", pathMatch:"full", component: HomeComponent},
  {path: "pets", component: HomeComponent},
  {path: "pets/info", component: InfoComponent},
  {path: "pets/new", component: NewComponent},
  {path: "pets/login", component: LoginComponent},
  {path: "pets/dogs", component: DogComponent},
  {path: "pets/cats", component: CatComponent},
  {path: "pets/faq", component: FaqComponent},
  {path: "pets/privacy", component: PrivacyComponent},
  {path: "pets/about", component: AboutComponent},
  {path: "pets/dogcare", component: DogcareComponent},
  {path: "pets/catcare", component: CatcareComponent},
  {path: "pets/rescues", component: RescuesComponent},
  {path: "pets/videos", component: VideosComponent},
  {path: "pets/:id", component: DetailComponent},
  {path: "pets/:id/edit", component: EditComponent},
  {path: "users/:id", component: ProfileComponent},
  {path: "users/:id/edit", component: UserEditComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
