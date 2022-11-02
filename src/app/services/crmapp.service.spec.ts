import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CrmappService } from './crmapp.service';

describe('CrmappService', () => {
  let service: CrmappService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CrmappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
