import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitleNavComponent } from './header-title-nav.component';

describe('HeaderTitleNavComponent', () => {
  let component: HeaderTitleNavComponent;
  let fixture: ComponentFixture<HeaderTitleNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTitleNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTitleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
