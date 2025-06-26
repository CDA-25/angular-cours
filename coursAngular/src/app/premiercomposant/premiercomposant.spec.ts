import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Premiercomposant } from './premiercomposant';

describe('Premiercomposant', () => {
  let component: Premiercomposant;
  let fixture: ComponentFixture<Premiercomposant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Premiercomposant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Premiercomposant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
