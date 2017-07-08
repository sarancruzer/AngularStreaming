import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPortalComponent } from './music-portal.component';

describe('MusicPortalComponent', () => {
  let component: MusicPortalComponent;
  let fixture: ComponentFixture<MusicPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
