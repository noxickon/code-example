import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEntryComponent } from './card-entry.component';

describe('CardEntryComponent', () => {
  let component: CardEntryComponent;
  let fixture: ComponentFixture<CardEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
