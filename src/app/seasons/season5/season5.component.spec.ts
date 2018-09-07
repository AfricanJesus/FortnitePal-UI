import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {AppService} from "../../app.service";
import {Season5Component} from "./season5.component";



describe('Season5Component', () => {
  let component: Season5Component;
  let fixture: ComponentFixture<Season5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ Season5Component ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Season5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
