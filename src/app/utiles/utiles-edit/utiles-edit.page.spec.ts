import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilesEditPage } from './utiles-edit.page';

describe('UtilesEditPage', () => {
  let component: UtilesEditPage;
  let fixture: ComponentFixture<UtilesEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilesEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
