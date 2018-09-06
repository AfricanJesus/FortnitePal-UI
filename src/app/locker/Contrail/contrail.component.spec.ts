import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../app.service';

import { ContrailComponent } from './contrail.component';

describe('ContrailComponent', () => {
  let component: ContrailComponent;
  let fixture: ComponentFixture<ContrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ ContrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
