import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhebComponent } from './iheb.component';

describe('IhebComponent', () => {
  let component: IhebComponent;
  let fixture: ComponentFixture<IhebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IhebComponent]
    });
    fixture = TestBed.createComponent(IhebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
