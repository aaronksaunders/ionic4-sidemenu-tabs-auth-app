import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // using no auth
  //{ path: '', redirectTo: 'tabs/tabs/tab1', pathMatch: 'full' },
  // uncomment to use auth { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '', redirectTo: 'sidemenu', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  //{ path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'sidemenu', loadChildren: './sidemenu/sidemenu.module#SidemenuPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
