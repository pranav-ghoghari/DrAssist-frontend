import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SearchBoxComponent } from './main-page/search-box/search-box.component';
import { EhrAreaComponent } from './main-page/ehr-area/ehr-area.component';
import { SymptomsComponent } from './main-page/symptoms/symptoms.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { SymptomsService } from './symptoms.service';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule





@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    ResultPageComponent,
    SearchBoxComponent,
    EhrAreaComponent,
    SymptomsComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [
    SymptomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
