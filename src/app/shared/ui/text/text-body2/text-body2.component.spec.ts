import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBody2Component } from './text-body2.component';

describe('TextBody2Component', () => {
  let component: TextBody2Component;
  let fixture: ComponentFixture<TextBody2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBody2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
