import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNavbarComponent } from './input-navbar.component';

describe('InputNavbarComponent', () => {
  let component: InputNavbarComponent;
  let fixture: ComponentFixture<InputNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
