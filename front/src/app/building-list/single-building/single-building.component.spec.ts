import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBuildingComponent } from './single-building.component';

describe('SingleBuildingComponent', () => {
  let component: SingleBuildingComponent;
  let fixture: ComponentFixture<SingleBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
