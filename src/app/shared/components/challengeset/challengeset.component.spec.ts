import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesetComponent } from './challengeset.component';

describe('ChallengesetComponent', () => {
  let component: ChallengesetComponent;
  let fixture: ComponentFixture<ChallengesetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengesetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
