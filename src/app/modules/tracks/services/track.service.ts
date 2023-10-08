import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map, mergeMap, tap, catchError} from "rxjs/operators";
import {environment} from "../../../../environments/environment";
import {TrackModel} from "@core/models/tracks.models";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }

  /**
   * @devolver todas las canciones
   */

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id);
      resolve(listTmp)
    })
  }

  /**
   * //TODO {data:[..1,...2,..2]}
   *
   * @returns
   */
  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({data}: any) => {
          return data
        })
      )
  }

  /**
   * @devolver las cancines random
   */
  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        tap(data => console.log('comenzando el pipe', data)),
        mergeMap(({data}: any) => this.skipById(data, 1)),
        // map(({data}:any)=>{//TODO: devolvemos la lista revertida
        //   return data.reverse()
        // }),
        // map(({dataRevertida}:any)=>{//TODO: aplicar un filter comun de array
        //   return dataRevertida.filter((track:TrackModel)=>track._id!==1)
        // }),
        tap(data => console.log('dentro del pipe', data)),
        catchError((err)=>{
          const {status,statusText,url} = err;
          console.log('Algo paso revisame 😢😢', [status,statusText,url])
          return of([])
        })
      )
  }
}
