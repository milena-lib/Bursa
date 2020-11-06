import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    SharedModule
  ]
})
export class ReactiveFormsModule { }
