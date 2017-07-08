import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePortalComponent } from './movie-portal.component';

describe('MoviePortalComponent', () => {
  let component: MoviePortalComponent;
  let fixture: ComponentFixture<MoviePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
