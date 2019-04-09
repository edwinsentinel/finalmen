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

  { path: 'intoapp', loadChildren: './intoapp/intoapp.module#IntoappPageModule' },
  { path: 'sessions', loadChildren: './sessions/sessions.module#SessionsPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'savings', loadChildren: './savings/savings.module#SavingsPageModule' },
  { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsPageModule' },
  { path: 'loan', loadChildren: './loan/loan.module#LoanPageModule' },
  { path: 'othersessions', loadChildren: './othersessions/othersessions.module#OthersessionsPageModule' },
  { path: 'additionalmaterials', loadChildren: './additionalmaterials/additionalmaterials.module#AdditionalmaterialsPageModule' },
  { path: 'pdfs', loadChildren: './pdfs/pdfs.module#PdfsPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
