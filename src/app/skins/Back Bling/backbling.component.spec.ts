import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {BackblingComponent} from "./backbling.component";
import {AppService} from "../../app.service";



describe('OutfitComponent', () => {
  let component: BackblingComponent;
  let fixture: ComponentFixture<BackblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ BackblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
