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

const routes: Routes = [
  {path: "", pathMatch:"full", component: HomeComponent},
  {path: "pets", component: HomeComponent},
  {path: "pets/info", component: InfoComponent},
  {path: "pets/new", component: NewComponent},
  {path: "pets/login", component: LoginComponent},
  {path: "pets/dogs", component: DogComponent},
  {path: "pets/cats", component: CatComponent},
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
