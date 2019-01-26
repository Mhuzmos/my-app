import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitleSearchComponent } from './header-title-search.component';

describe('HeaderTitleSearchComponent', () => {
  let component: HeaderTitleSearchComponent;
  let fixture: ComponentFixture<HeaderTitleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTitleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTitleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
