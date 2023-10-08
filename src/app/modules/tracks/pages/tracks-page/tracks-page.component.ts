import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrackService} from '@modules/tracks/services/track.service';
import {TrackModel} from "@core/models/tracks.models";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) {
  }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()

  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    // this.tracksRandom = await this.trackService.getAllRandom$().toPromise()

  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
        // console.log('👍👍 tracksRandom',response)
      },error => {
        // alert('💥💥💥Error de conexion')
        console.log('💥💥💥Error de conexion')
      })
  }


  ngOnDestroy(): void {

  }


}
