import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './public/features/pages/welcome/welcome.component';
import { ResultsComponent } from './public/features/pages/results/results.component';
import { ListComponent } from './public/features/components/repository/list/list.component';
import { ProfileComponent } from './public/features/components/repository/profile/profile.component';
import { CardComponent } from './public/shared/card/card.component';
import { StatusComponent } from './public/shared/status/status.component';
import { HeaderComponent } from './public/features/components/header/header.component';
import { InputComponent } from './public/shared/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './public/shared/button/button.component';
import { InfoComponent } from './public/features/components/repository/info/info.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResultsComponent,
    ListComponent,
    ProfileComponent,
    CardComponent,
    StatusComponent,
    HeaderComponent,
    InputComponent,
    ButtonComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
