import { TestBed } from '@angular/core/testing';

import { NewsStoreService } from './news-store.service';

describe('NewsStoreService', () => {
  let service: NewsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
