import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickSearchRoutingModule } from './quick-search-routing.module';
import { QuickSearchComponent } from './quick-search.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [QuickSearchComponent],
  imports: [
    CommonModule,
    QuickSearchRoutingModule,
    SharedModule
  ]
})
export class QuickSearchModule { }
