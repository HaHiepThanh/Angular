import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCellphoneSComponent } from './logo-cellphone-s.component';

describe('LogoCellphoneSComponent', () => {
  let component: LogoCellphoneSComponent;
  let fixture: ComponentFixture<LogoCellphoneSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCellphoneSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCellphoneSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
