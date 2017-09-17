import { NgModule } from '@angular/core';

import { CoachTitlePipe } from './coach-title.pipe';
import { CoachStatusPipe } from './coach-status.pipe';

@NgModule({
  declarations: [
    CoachStatusPipe,
    CoachTitlePipe,
  ],
  exports: [
    CoachStatusPipe,
    CoachTitlePipe,
  ],
})
export class CustomPipesModule { }
