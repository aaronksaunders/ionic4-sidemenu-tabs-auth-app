import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateAccountPage } from "./create-account/create-account.page";
import { LoginPage } from "./login/login.page";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: "login",
    component: LoginPage
  },
  {
    path: "create-account",
    component: CreateAccountPage
  }
];

@NgModule({
  declarations: [LoginPage, CreateAccountPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {}
