import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BursaRoutingModule } from './bursa-routing.module';
import { BursaComponent } from './bursa.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BursaComponent],
  imports: [
    CommonModule,
    BursaRoutingModule,
    SharedModule
  ]
})
export class BursaModule { }
