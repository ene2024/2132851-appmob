import { TestBed } from '@angular/core/testing';

import { AgregaTareasService } from './agrega-tareas.service';

describe('AgregaTareasService', () => {
  let service: AgregaTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregaTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});