import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyModule } from "./services/family/family.module";
import { CookieModule } from "./services/cookie/cookie.module";
import { API_BASE_URL } from "./services/family/family.service";
import { environment } from "../environments/environment";
import { MaterialModule } from "./modules/material/material.module";
import { FamilyListComponent } from './views/family-list/family-list.component';
import { FamilyProfileComponent } from './views/family-profile/family-profile.component';
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FamilyUserAddComponent } from './views/family-user-add/family-user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyListComponent,
    FamilyProfileComponent,
    FamilyUserAddComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FamilyModule,
        CookieModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.API_BASE_URL },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
