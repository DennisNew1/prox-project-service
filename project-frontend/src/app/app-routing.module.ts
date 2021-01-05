import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectComponent } from '@modules/project/pages/project/project.component';
import { ProjectDetailsComponent } from '@modules/project/pages/project-details/project-details.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
