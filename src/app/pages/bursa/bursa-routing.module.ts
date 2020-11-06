import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BursaComponent } from './bursa.component';

const routes: Routes = [{ path: '', component: BursaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BursaRoutingModule { }
