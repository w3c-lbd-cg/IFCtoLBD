import { Component, OnDestroy, OnInit } from '@angular/core';
import { BuildingsService } from '../services/buildings.service';
import { Building } from '../models/building.model';
import { Subscription } from 'rxjs/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit, OnDestroy {

  buildings: Building[];
  buildingsSubscription: Subscription;

  constructor(private buildingsService: BuildingsService, private router: Router) {}

  ngOnInit() {
    this.buildingsSubscription = this.buildingsService.buildingsSubject.subscribe(
      (buildings: Building[]) => {
        this.buildings = buildings;
      }
    );
    this.buildingsService.emitBuildings();
  }

  onNewBuilding() {
    this.router.navigate(['/buildings', 'new']);
  }

  onDeleteBuilding(building: Building) {
    this.buildingsService.removeBuilding(building);
  }

  onViewBuilding(id: number) {
    this.router.navigate(['/buildings', 'view', id]);
  }

  ngOnDestroy() {
    this.buildingsSubscription.unsubscribe();
  }
}
