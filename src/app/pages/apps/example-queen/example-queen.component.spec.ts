import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleQueenComponent } from './example-queen.component';

describe('ExampleQueenComponent', () => {
  let component: ExampleQueenComponent;
  let fixture: ComponentFixture<ExampleQueenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleQueenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleQueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
