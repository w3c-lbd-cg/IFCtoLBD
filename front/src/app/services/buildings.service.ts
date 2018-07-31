import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Building } from '../models/building.model';
//import * as firebase from 'firebase';
//import { DataSnapshot } from 'firebase/database';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class BuildingsService {


  buildings: Building[] = [];
  buildingsSubject = new Subject<Building[]>();

  constructor() {
    //this.getBuildings();
  }

  emitBuildings() {
    this.buildingsSubject.next(this.buildings);
  }

  // saveBuildings() {
  //   firebase.database().ref('/buildings').set(this.buildings);
  // }

}
