import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toto } from './toto';

describe('Toto', () => {
  let component: Toto;
  let fixture: ComponentFixture<Toto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
