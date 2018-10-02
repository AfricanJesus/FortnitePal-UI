import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {AppService} from "../../app.service";
import {Season6Component} from "./season6.component";



describe('Season6Component', () => {
  let component: Season6Component;
  let fixture: ComponentFixture<Season6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ Season6Component ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Season6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
