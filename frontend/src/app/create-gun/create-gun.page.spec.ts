import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGunPage } from './create-gun.page';

describe('CreateGunPage', () => {
  let component: CreateGunPage;
  let fixture: ComponentFixture<CreateGunPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
