import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Building } from '../models/building.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class BuildingsService {


  buildings: Building[] = [];
  buildingsSubject = new Subject<Building[]>();

  constructor() {
    this.getBuildings();
  }

  emitBuildings() {
    this.buildingsSubject.next(this.buildings);
    console.log("emit");
  }

  saveBuildings() {
    firebase.database().ref('/buildings').set(this.buildings);
    console.log("save");
  }

  getBuildings() {
    //console.log("get "+firebase.database().ref('/buildings'));
    firebase.database().ref('/buildings')
      .on('value', (data: DataSnapshot) => {
          console.log("value");
          this.buildings = data.val() ? data.val() : [];
          this.emitBuildings();
        }
      );
  }

  getSingleBuilding(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/buildings/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewBuilding(newBuilding: Building) {
    this.buildings.push(newBuilding);
    this.saveBuildings();
    this.emitBuildings();
  }

  removeBuilding(building: Building) {
    const buildingIndexToRemove = this.buildings.findIndex(
      (buildingEl) => {
        if(buildingEl === building) {
          return true;
        }
      }
    );
    this.buildings.splice(buildingIndexToRemove, 1);
    this.saveBuildings();
    this.emitBuildings();
  }
}
