import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoFormComponent,
    PhotoListComponent,
    PhotosComponent,
  ],
  exports: [
    PhotoComponent,
    PhotoFormComponent,
    PhotoListComponent,
    PhotosComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class PhotosModule { }
