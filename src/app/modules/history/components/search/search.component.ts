import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() callback: EventEmitter<any> = new EventEmitter();
  src: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }


  callSearch(term: string) {
    if (term.length >= 3) {
      this.callback.emit(term)
      // console.log('callSearch', term)
    }
  }
}
