import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllGunsPage } from './all-guns.page';

describe('AllGunsPage', () => {
  let component: AllGunsPage;
  let fixture: ComponentFixture<AllGunsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGunsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
