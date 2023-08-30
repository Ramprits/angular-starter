import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent, data: { title: marker('About') } }];

/**
 * The `AboutRoutingModule` class is an Angular module that provides routing functionality for the `AboutComponent`.
 * It imports the `RouterModule` and defines the routes for the `AboutComponent`.
 * It also exports the `RouterModule` to make it available for other modules to import.
 */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AboutRoutingModule {}
