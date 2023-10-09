import { TestBed } from '@angular/core/testing';

import { SessionGuard } from './session.guard';
import { RouterTestingModule } from '@angular/router/testing';

// TODO: 🔴🔴 ES EL NOMBRE DE LA PRUEBA "EXAMEN DEL SESSION GUARD"
describe('Testing of Session Guard 👍', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(SessionGuard);
  });
// TODO: LA PRIMERA  PREGUNTA DE ESE GRAN EXAMEN
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
