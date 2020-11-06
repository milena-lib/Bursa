import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: 'home',  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }, 
  { path: 'bursa', loadChildren: () => import('./pages/bursa/bursa.module').then(m => m.BursaModule)},
  { path: 'search', loadChildren: () => import('./pages/quick-search/quick-search.module').then(m => m.QuickSearchModule)},
  { path: 'forms', loadChildren: () => import('./pages/reactive-forms/reactive-forms.module').then(m => m.ReactiveFormsModule)},
  { path: '', redirectTo: 'bursa', pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
