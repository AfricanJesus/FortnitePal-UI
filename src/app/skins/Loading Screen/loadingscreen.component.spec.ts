import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../app.service';

import { LoadingScreenComponent } from './loadingscreen.component';

describe('LoadingScreenComponent', () => {
  let component: LoadingScreenComponent;
  let fixture: ComponentFixture<LoadingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ],
      declarations: [ LoadingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
