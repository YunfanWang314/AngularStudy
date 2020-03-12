import { TestBed } from '@angular/core/testing';

import { HttpInterceperBasicAuthService } from './http-interceper-basic-auth.service';

describe('HttpInterceperBasicAuthService', () => {
  let service: HttpInterceperBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceperBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
