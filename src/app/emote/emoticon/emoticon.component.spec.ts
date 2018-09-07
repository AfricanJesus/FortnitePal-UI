import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../app.service';
import {EmoticonComponent} from "./emoticon.component";





describe('EmoticonComponent', () => {
  let component: EmoticonComponent;
  let fixture: ComponentFixture<EmoticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ EmoticonComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
