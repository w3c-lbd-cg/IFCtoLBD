import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { BuildingsService } from './services/buildings.service'
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //} implements OnInit {

  //constructor(private buildingsService: BuildingsService) {
  constructor() {
    let apiKey: string = environment.apiKey;
    let authDomain: string = environment.authDomain;
    let databaseURL: string = environment.databaseURL;
    let projectId: string = environment.projectId;
    let storageBucket: string = environment.storageBucket;
    let messagingSenderId: string = environment.messagingSenderId;

    var config = {
      apiKey, authDomain, databaseURL,
      projectId, storageBucket, messagingSenderId
    };
    firebase.initializeApp(config);
  }

  // ngOnInit(){
  // }

}
