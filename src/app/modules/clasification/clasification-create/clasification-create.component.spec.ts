import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationCreateComponent } from './clasification-create.component';

describe('ClasificationCreateComponent', () => {
  let component: ClasificationCreateComponent;
  let fixture: ComponentFixture<ClasificationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
