import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ToyComponent} from "./toy.component";
import {AppService} from "../../app.service";




describe('ToyComponent', () => {
  let component: ToyComponent;
  let fixture: ComponentFixture<ToyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ ToyComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
