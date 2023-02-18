import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { LearningJourneyComponent } from './components/learning-journey/learning-journey.component';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'learning-journey',
    component: LearningJourneyComponent,
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
