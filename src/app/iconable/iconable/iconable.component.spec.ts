import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconableComponent } from './iconable.component';

describe('IconableComponent', () => {
  let component: IconableComponent;
  let fixture: ComponentFixture<IconableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
