import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboaardComponent } from './dashboard.component';

describe('DasboaardComponent', () => {
  let component: DasboaardComponent;
  let fixture: ComponentFixture<DasboaardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboaardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboaardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
