import { TestBed, inject } from '@angular/core/testing';

import { GifService } from './gif.service';

describe('GifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GifService]
    });
  });

  it('should be created', inject([GifService], (service: GifService) => {
    expect(service).toBeTruthy();
  }));
});
