import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickSearchComponent } from './quick-search.component';

const routes: Routes = [{ path: '', component: QuickSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickSearchRoutingModule { }
