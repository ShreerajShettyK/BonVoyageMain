import { TestBed } from '@angular/core/testing';

import { EnquiryModalService } from './enquiry-modal.service';

describe('EnquiryModalService', () => {
  let service: EnquiryModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
