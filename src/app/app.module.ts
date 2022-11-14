import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryProfileComponent } from './repository-profile/repository-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepositoryListComponent,
    RepositoryProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
