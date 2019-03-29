import { TestBed } from '@angular/core/testing';

import { CodeanalyzerService } from './codeanalyzer.service';

describe('CodeanalyzerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeanalyzerService = TestBed.get(CodeanalyzerService);
    expect(service).toBeTruthy();
  });
});
