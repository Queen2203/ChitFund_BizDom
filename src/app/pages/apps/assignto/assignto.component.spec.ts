import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntoComponent } from './assignto.component';

describe('AssigntoComponent', () => {
  let component: AssigntoComponent;
  let fixture: ComponentFixture<AssigntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
