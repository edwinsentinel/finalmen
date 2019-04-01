import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intoapp',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'podcasts', loadChildren: './podcasts/podcasts.module#PodcastsPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'materials', loadChildren: './materials/materials.module#MaterialsPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'method', loadChildren: './method/method.module#MethodPageModule' },
  { path: 'sacco', loadChildren: './sacco/sacco.module#SaccoPageModule' },
  { path: 'memberregistration', loadChildren: './memberregistration/memberregistration.module#MemberregistrationPageModule' },
  { path: 'into', loadChildren: './into/into.module#IntoPageModule' },
  { path: 'intoapp', loadChildren: './intoapp/intoapp.module#IntoappPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
