import { TestBed } from '@angular/core/testing';

import { RestaruantdetailsService } from './restaruantdetails.service';

describe('RestaruantdetailsService', () => {
  let service: RestaruantdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaruantdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
