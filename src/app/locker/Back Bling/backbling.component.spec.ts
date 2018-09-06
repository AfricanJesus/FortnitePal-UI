import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../app.service';

import { BackblingComponent } from './backbling.component';

describe('OutfitComponent', () => {
  let component: BackblingComponent;
  let fixture: ComponentFixture<OutfitComponent>;

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
