import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProjectComponent } from '@modules/project/pages/project/project.component';
import { ProjectDetailsComponent } from '@modules/project/pages/project-details/project-details.component';
import { ProjectItemComponent } from '@modules/project/components/project-item/project-item.component';
import { ProjectEditorComponent } from '@modules/project/components/project-editor/project-editor.component';
import { ProjectEditorDialogComponent } from '@modules/project/components/project-editor-dialog/project-editor-dialog.component';
import { StudyCourseModuleSelectionComponent } from '@modules/project/components/study-course-module-selection/study-course-module-selection.component';
import { ConfirmDialogComponent } from '@modules/project/components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    ProjectEditorComponent,
    ProjectEditorDialogComponent,
    ProjectItemComponent,
    StudyCourseModuleSelectionComponent,
    ConfirmDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  // entryComponents: [ProjectEditorDialogComponent, ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
