import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationListComponent } from './clasification-list.component';

describe('ClasificationListComponent', () => {
  let component: ClasificationListComponent;
  let fixture: ComponentFixture<ClasificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
