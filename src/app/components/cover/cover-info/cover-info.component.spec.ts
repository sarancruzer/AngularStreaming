import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverInfoComponent } from './cover-info.component';

describe('CoverInfoComponent', () => {
  let component: CoverInfoComponent;
  let fixture: ComponentFixture<CoverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
