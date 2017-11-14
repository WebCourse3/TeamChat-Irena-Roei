import { TestBed, inject } from '@angular/core/testing';

import { SingServiceService } from './sing-service.service';

describe('SingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingServiceService]
    });
  });

  it('should be created', inject([SingServiceService], (service: SingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
