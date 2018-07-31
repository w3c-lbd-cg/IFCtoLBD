import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Building } from '../../models/building.model';
import { BuildingsService } from '../../services/buildings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.css']
})
export class BuildingFormComponent implements OnInit {

  buildingForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private buildingsService: BuildingsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.buildingForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }

  onSaveBuilding() {
    const title = this.buildingForm.get('title').value;
    const author = this.buildingForm.get('author').value;
    const synopsis = this.buildingForm.get('synopsis').value;
    const newBuilding = new Building(title, author);
    newBuilding.synopsis = synopsis;
    this.buildingsService.createNewBuilding(newBuilding);
    this.router.navigate(['/buildings']);
  }
}
