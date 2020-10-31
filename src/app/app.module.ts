import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { DatePipe } from '@angular/common';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { MatTableModule} from '@angular/material/table';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatTableModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
    // BrowserAnimationsModule
     
  ],
  providers: [DatePipe, HttpService],

  bootstrap: [AppComponent]
})
export class AppModule { }
