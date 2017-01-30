/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeterLoggerService } from './beter-logger.service';

describe('BeterLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeterLoggerService]
    });
  });

  it('should ...', inject([BeterLoggerService], (service: BeterLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
