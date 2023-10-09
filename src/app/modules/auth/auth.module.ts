import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from '@modules/auth/pages/login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    LoginPageComponent
  ]
})
export class AuthModule { }
