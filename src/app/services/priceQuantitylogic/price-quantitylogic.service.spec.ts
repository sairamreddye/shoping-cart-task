import { TestBed } from '@angular/core/testing';

import { PriceQuantitylogicService } from './price-quantitylogic.service';

describe('PriceQuantitylogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceQuantitylogicService = TestBed.get(PriceQuantitylogicService);
    expect(service).toBeTruthy();
  });
});
