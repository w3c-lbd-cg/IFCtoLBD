import { Component, OnInit } from '@angular/core';
import { Building } from '../../models/building.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingsService } from '../../services/buildings.service';

@Component({
  selector: 'app-single-building',
  templateUrl: './single-building.component.html',
  styleUrls: ['./single-building.component.css']
})
export class SingleBuildingComponent implements OnInit {

  building: Building;

  constructor(private route: ActivatedRoute, private buildingsService: BuildingsService,
              private router: Router) {}

  ngOnInit() {
    this.building = new Building('', '');
    const id = this.route.snapshot.params['id'];
    this.buildingsService.getSingleBuilding(+id).then(
      (building: Building) => {
        this.building = building;
      }
    );
  }

  onBack() {
    this.router.navigate(['/buildings']);
  }
}
