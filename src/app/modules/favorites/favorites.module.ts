import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { SharedModule } from '@shared/shared.module';
import {FavoritePageComponent} from "@modules/favorites/pages/favorite-page/favorite-page.component";


@NgModule({
  declarations: [
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ],
  exports:[
    FavoritePageComponent
  ]
})
export class FavoritesModule { }
