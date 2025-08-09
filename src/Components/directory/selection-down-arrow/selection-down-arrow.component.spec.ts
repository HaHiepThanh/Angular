import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionDownArrowComponent } from './selection-down-arrow.component';

describe('SelectionDownArrowComponent', () => {
  let component: SelectionDownArrowComponent;
  let fixture: ComponentFixture<SelectionDownArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionDownArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionDownArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
