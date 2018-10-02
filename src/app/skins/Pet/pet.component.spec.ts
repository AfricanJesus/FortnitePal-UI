import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {BackblingComponent, PetComponent} from "./pet.component";
import {AppService} from "../../app.service";



describe('PetComponent', () => {
  let component: PetComponent;
  let fixture: ComponentFixture<BackblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ PetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
