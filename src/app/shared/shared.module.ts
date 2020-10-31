import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeModule } from '../pages/home/home.module';
// import { HomeComponent } from '../pages/home/home.component';
// import { AboutModule } from '../pages/about/about.module';
import { SecuritiesComponent } from '../components/securities/securities.component';
import { LiveSearchComponent } from '../components/live-search/live-search.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ SecuritiesComponent, LiveSearchComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    BrowserModule,
    ReactiveFormsModule
    // HomeModule
        
  ],
  exports: [//HomeModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
