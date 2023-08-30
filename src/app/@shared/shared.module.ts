import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';

@NgModule({
  imports: [TranslateModule, CommonModule],
  declarations: [LoaderComponent, NotFoundComponent, InternalErrorComponent],
  exports: [LoaderComponent],
})
export class SharedModule {}
