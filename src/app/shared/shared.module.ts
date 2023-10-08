import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components

import { CardPlayerComponent } from './components/card-player/card-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { RouterModule } from '@angular/router';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    CardPlayerComponent,
    HeaderUserComponent,
    ImgBrokenDirective,
    MediaPlayerComponent,
    OrderListPipe,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,

  ],
  exports: [
    CardPlayerComponent,
    HeaderUserComponent,
    ImgBrokenDirective,
    MediaPlayerComponent,
    OrderListPipe,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
