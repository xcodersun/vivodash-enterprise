import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdOptionModule,
  MdTabsModule,
  MdTableModule,
  MdToolbarModule,
  MdSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdOptionModule,
    MdTabsModule,
    MdTableModule,
    MdToolbarModule,
    MdSelectModule,
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdOptionModule,
    MdTabsModule,
    MdTableModule,
    MdToolbarModule,
    MdSelectModule,
  ],
})
export class MaterialModule {}