import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { SingleBuildingComponent } from './building-list/single-building/single-building.component';
import { BuildingFormComponent } from './building-list/building-form/building-form.component';
import { HeaderComponent } from './header/header.component';
import { BuildingsService } from './services/buildings.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import * as firebase from 'firebase';


const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'buildings', canActivate: [AuthGuardService], component: BuildingListComponent },
  { path: 'buildings/new', canActivate: [AuthGuardService], component: BuildingFormComponent },
  { path: 'buildings/view/:id', canActivate: [AuthGuardService], component: SingleBuildingComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '', redirectTo: 'buildings', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }     // never add some paths after this one 
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BuildingListComponent,
    SingleBuildingComponent,
    BuildingFormComponent,
    HeaderComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
    //FormGroup,
    //Validators,
    //firebase
  ],
  providers: [
    BuildingsService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]

})


export class AppModule { }
