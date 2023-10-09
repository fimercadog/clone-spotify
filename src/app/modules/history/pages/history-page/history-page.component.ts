import { Component, OnInit } from '@angular/core';
import {SearchService} from "@modules/history/services/search.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults$:Observable<any>=of([]);

  constructor(private searchService:SearchService) {
  }

  receiveData(event:string) {
    // TODO: agarras el termino y solo se ejecuta cuando tiene 3 caracateres
    // console.log('😁😁 estoy en el padre ' + event);
    this.listResults$=this.searchService.searchTracks$(event)

  }

  ngOnInit(): void {
  }
}
