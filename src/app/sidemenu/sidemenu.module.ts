import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SidemenuPage } from "./sidemenu.page";

const routes: Routes = [
  { path: "", redirectTo: "tabs/tabs/tab1", pathMatch: "full" },
  {
    path: "",
    component: SidemenuPage,
    children: [
      {
        path: "tabs",
        loadChildren: "../tabs/tabs.module#TabsPageModule"
      },
      {
        path: "search",
        loadChildren: "../search/search.module#SearchPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SidemenuPage]
})
export class SidemenuPageModule {}
