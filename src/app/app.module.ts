import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './public/features/pages/welcome/welcome.component';
import { ResultsComponent } from './public/features/pages/results/results.component';
import { ListComponent } from './public/features/components/repository/list/list.component';
import { ProfileComponent } from './public/features/components/repository/profile/profile.component';
import { CardComponent } from './public/shared/card/card.component';
import { StatusComponent } from './public/shared/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResultsComponent,
    ListComponent,
    ProfileComponent,
    CardComponent,
    StatusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
