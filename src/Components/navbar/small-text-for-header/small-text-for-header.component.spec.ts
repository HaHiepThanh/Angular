import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTextForHeaderComponent } from './small-text-for-header.component';

describe('SmallTextForHeaderComponent', () => {
  let component: SmallTextForHeaderComponent;
  let fixture: ComponentFixture<SmallTextForHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallTextForHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallTextForHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
