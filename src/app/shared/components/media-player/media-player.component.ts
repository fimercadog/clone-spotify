import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TrackModel} from "@core/models/tracks.model";
import {MultimediaService} from "@shared/services/multimedia.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  // mockCover!: TrackModel ;

  listObservers$: Array<Subscription> = [];
  state: string = 'paused';

  constructor(public multimediaService: MultimediaService) {
    // const observable1$ = this.multimediaService.myObservable1$
    //   .subscribe(
    //     (responseOK) => {
    //       // TODO: next()
    //       console.log('😎😎 el agua llega perfecto ',responseOK)
    //     },
    //     (responseFail) => {
    //       // TODO: error()
    //       console.log('😭😭😭 ese tapo la tuberia ')
    //     }
    //   )
  }

  ngOnInit(): void {

    const observer1$ = this.multimediaService.playerStatus$
      .subscribe(status => this.state = status)

    this.listObservers$ = [observer1$]


    // this.multimediaService.trackInfo$.subscribe(res=> {
    //   console.log('✔  Debo reproducir esta cancion...',res);
    // // this.mockCover=res
    //   })
    //
    //
    // const observer1$: Subscription = this.multimediaService.callback.subscribe(
    //   (response: TrackModel) => {
    //     console.log('💥', response)
    //   })
    // this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
    // console.log('💤');
  }

  handPosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const {clientX} = event
    const {x, width} = elNative.getBoundingClientRect()
    const clickX = clientX - x
    const percentageFromX = (clickX * 100) / width

    console.log(`Click(x): ${percentageFromX}`)
    this.multimediaService.seekAudio(percentageFromX)


  }
}
