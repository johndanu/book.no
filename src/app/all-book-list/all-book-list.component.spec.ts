import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookListComponent } from './all-book-list.component';

describe('AllBookListComponent', () => {
  let component: AllBookListComponent;
  let fixture: ComponentFixture<AllBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
