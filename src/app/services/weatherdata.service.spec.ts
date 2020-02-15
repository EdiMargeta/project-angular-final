import { TestBed } from '@angular/core/testing';

import { WeatherDataService } from './weatherdata.service';

describe('WeatherdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherDataService = TestBed.get(WeatherDataService);
    expect(service).toBeTruthy();
  });
});
