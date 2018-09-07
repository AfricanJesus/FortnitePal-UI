import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {AppService} from "../../app.service";
import {Season2Component} from "./season2.component";



describe('Season2Component', () => {
  let component: Season1Component;
  let fixture: ComponentFixture<Season1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ Season2Component ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Season2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
