import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './public/features/pages/results/results.component';
import { WelcomeComponent } from './public/features/pages/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
