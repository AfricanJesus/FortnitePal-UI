import { TestBed, inject } from '@angular/core/testing';

import { ItemSimpleService } from './itemsimple.service';

describe('ItemSimpleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemSimpleService]
    });
  });

  it('should be created', inject([ItemSimpleService], (service: ItemSimpleService) => {
    expect(service).toBeTruthy();
  }));
});
