import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FavoritesPageComponent} from "@modules/favorites/pages/favorite-page/favorite-page.component";

const routes: Routes = [
  {
    path: '',
    component:FavoritesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule { }
