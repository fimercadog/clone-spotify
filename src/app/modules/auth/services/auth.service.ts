import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api

  constructor(private http:HttpClient,private cookie:CookieService) {
  }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return  this.http.post(`${this.URL}/auth/login`, body)
      .pipe(
        tap((responseOK:any)=>{
          const {tokenSession,data} =responseOK
          this.cookie.set('token_servicio', tokenSession, 4, '/') //TODO:📌📌📌📌
        })
      )
    // console.log('❤', email, password)
  }
}
