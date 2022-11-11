import { TestBed } from '@angular/core/testing';

import { AdiminMessageService } from './adimin-message.service';

describe('AdiminMessageService', () => {
  let service: AdiminMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdiminMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
