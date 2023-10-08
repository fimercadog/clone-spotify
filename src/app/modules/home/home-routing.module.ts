import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SideBarComponent} from "@shared/components/side-bar/side-bar.component";

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren:()=>import('@modules/tracks/tracks.module').then(m=>m.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren:()=>import('@modules/favorites/favorites.module').then(m=>m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren:()=>import('@modules/history/history.module').then(m=>m.HistoryModule)
  },
  {
    path: '**',// TODO: 404 CUANDO NO EXISTE LA RUTA
    redirectTo:'/tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
