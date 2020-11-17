import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationDetailComponent } from './clasification-detail.component';

describe('ClasificationDetailComponent', () => {
  let component: ClasificationDetailComponent;
  let fixture: ComponentFixture<ClasificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
