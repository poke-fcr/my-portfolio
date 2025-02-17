import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactDialogComponent,
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    pathMatch: 'full'
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
export class AppRoutingModule { }
