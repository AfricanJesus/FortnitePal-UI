import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../app.service';
import {DanceComponent} from "./dance.component";



describe('DanceComponent', () => {
  let component: DanceComponent;
  let fixture: ComponentFixture<DanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ DanceComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
