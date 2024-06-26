import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { LearningJourneyWrapComponent } from './components/learning-journey-wrap/learning-journey-wrap.component';
import { LearningJourneyComponent } from './components/learning-journey/learning-journey.component';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'learning-journey',
    component: LearningJourneyWrapComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
