/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContryDnService } from './contry-dn.service';

describe('Service: ContryDn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContryDnService]
    });
  });

  it('should ...', inject([ContryDnService], (service: ContryDnService) => {
    expect(service).toBeTruthy();
  }));
});