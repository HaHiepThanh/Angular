import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductionComponent } from './display-production.component';

describe('DisplayProductionComponent', () => {
  let component: DisplayProductionComponent;
  let fixture: ComponentFixture<DisplayProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayProductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
