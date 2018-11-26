import { TestBed } from '@angular/core/testing';

import { TestSeriesService } from './test-series.service';

describe('TestSeriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestSeriesService = TestBed.get(TestSeriesService);
    expect(service).toBeTruthy();
  });
});
