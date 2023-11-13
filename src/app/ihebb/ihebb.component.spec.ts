import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhebbComponent } from './ihebb.component';

describe('IhebbComponent', () => {
  let component: IhebbComponent;
  let fixture: ComponentFixture<IhebbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IhebbComponent]
    });
    fixture = TestBed.createComponent(IhebbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
