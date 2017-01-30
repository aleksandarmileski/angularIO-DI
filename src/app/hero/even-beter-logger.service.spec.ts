/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EvenBeterLoggerService } from './even-beter-logger.service';

describe('EvenBeterLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvenBeterLoggerService]
    });
  });

  it('should ...', inject([EvenBeterLoggerService], (service: EvenBeterLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
