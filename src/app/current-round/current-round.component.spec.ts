import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRoundComponent } from './current-round.component';

describe('CurrentRoundComponent', () => {
  let component: CurrentRoundComponent;
  let fixture: ComponentFixture<CurrentRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentRoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
